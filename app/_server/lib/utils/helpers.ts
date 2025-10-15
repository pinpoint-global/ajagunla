/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import {
  addDays,
  endOfDay,
  format,
  isBefore,
  setHours,
  setMilliseconds,
  setMinutes,
  setSeconds,
  startOfDay,
} from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { type CookieOptions, type Request, type Response } from 'express';
import type { FilterQuery, Query } from 'mongoose';
import { customAlphabet } from 'nanoid';
import { isPostman } from './tokens';
import { AppError } from './appError';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { RoleSlug } from '../seed/roles';
import { Role } from '../../models/role';
import { DISALLOWED_FIELDS } from '../../models/user';

const EXCLUDED_FIELDS = [
  'skip',
  'sort',
  'limit',
  'fields',
  'auth.password',
  'auth.password.value',
  'auth.password.passwordChangedAt',
  'auth.refreshTokenJTI',
  // 'auth.twoFA.secret',
  // 'auth.twoFA.recoveryCodes',
  // 'auth.twoFA.enrollmentDate',
  // 'auth.twoFA.lastVerifiedAt',
  // 'invitedBy',
  'countDocuments',
];

export interface fetchParameters {
  populateFields: [string, string];
  query: QueryString;
  countOnly: boolean;
  sumFields: string[];
}

export interface QueryString {
  skip?: string;
  sort?: string;
  limit?: string;
  fields?: string;

  [key: string]: string | undefined;
}

export default class QueryHandler<T> {
  private query: Query<T[], T>;
  private queryString: QueryString;
  private excludedFields: string[];

  constructor(
    query: Query<T[], T>,
    queryString: QueryString,
    excludedFields: string[] = EXCLUDED_FIELDS
  ) {
    this.query = query;
    this.queryString = Object.fromEntries(
      Object.entries(queryString).map(([key, value]) => [key, String(value)])
    );
    this.excludedFields = excludedFields;
  }

  filter(): QueryHandler<T> {
    const queryObj: Record<string, unknown> = {
      ...(this.queryString as QueryString),
    };
    this.excludedFields.forEach(el => delete queryObj[el]);

    // Create a new object to hold the parsed query parameters
    const parsedQueryObj: Record<string, unknown> = {};

    // Parse query parameters
    for (const key in queryObj) {
      const keyValue = queryObj[key];
      if (typeof keyValue === 'string') {
        if (keyValue === 'true') {
          parsedQueryObj[key] = true;
        } else if (keyValue === 'false') {
          parsedQueryObj[key] = false;
        } else if (keyValue.includes(':')) {
          if (keyValue.includes(',')) {
            keyValue.split(',').forEach(el => {
              const [operator, value] = el.split(':');

              console.log(operator, value, 'operator, value');
              const mongoOperator = `$${operator}`;

              // Parse value as a number if it's numeric, otherwise leave it as a string
              let parsedValue: string | number | Date = isNaN(Number(value))
                ? (value ?? '')
                : Number(value);

              if (['gte', 'gt'].includes(operator ?? '')) {
                parsedValue = startOfDay(value ?? '');
              }

              if (['lte', 'lt'].includes(operator ?? '')) {
                parsedValue = endOfDay(value ?? '');
              }

              parsedQueryObj[key] = {
                ...(typeof parsedQueryObj[key] === 'object' && parsedQueryObj[key] !== null
                  ? parsedQueryObj[key]
                  : {}),
                [mongoOperator]: parsedValue,
              };
            });
          } else {
            const [operator, value] = keyValue.split(':');

            // Convert operator to MongoDB operator
            const mongoOperator = `$${operator}`;

            // Parse value as a number if it's numeric, otherwise leave it as a string
            let parsedValue: string | number | Date = isNaN(Number(value))
              ? (value ?? '')
              : Number(value);

            if (['gte', 'gt'].includes(operator ?? '')) {
              parsedValue = startOfDay(value ?? '');
            }

            if (['lte', 'lt'].includes(operator ?? '')) {
              parsedValue = endOfDay(value ?? '');
            }

            // If the key already exists in parsedQueryObj, add the new operator to it, otherwise create a new object
            if (typeof parsedQueryObj[key] === 'object' && parsedQueryObj[key] !== null) {
              (parsedQueryObj[key] as Record<string, unknown>)[mongoOperator] = parsedValue;
            } else {
              parsedQueryObj[key] = { [mongoOperator]: parsedValue };
            }
          }
        } else if (keyValue.includes(',')) {
          // For fields with multiple values, split the values and add them as an array
          parsedQueryObj[key] = { $in: keyValue.split(',') };
        } else if (key.includes('_') && key !== '_id') {
          const newKey = key.replaceAll('_', '.');
          parsedQueryObj[newKey] = keyValue;
          delete parsedQueryObj[key];
        } else {
          // For other fields, use the key and value directly for the filter
          parsedQueryObj[key] = keyValue;
        }
      }
    }

    this.query = this.query.find(parsedQueryObj as FilterQuery<T>);
    return this;
  }

  sort(defaultSort: string = '-createdAt'): QueryHandler<T> {
    const sortBy = this.queryString.sort ? this.queryString.sort.split(',').join(' ') : defaultSort;
    this.query = this.query.sort(sortBy);
    return this;
  }

  limitFields(defaultField: string = '-__v'): QueryHandler<T> {
    const fields = this.queryString.fields
      ? this.queryString.fields.split(',').join(' ')
      : defaultField;
    this.query = this.query.select(fields);

    return this;
  }

  paginate(defaultSkip: number = 0, defaultLimit: number = 25): QueryHandler<T> {
    const skip = parseInt(this.queryString.skip || '') || defaultSkip;
    const parsedLimit = parseInt(this.queryString.limit || '');

    const limit = parsedLimit > 100 ? defaultLimit : parsedLimit || defaultLimit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }

  populate(path: string, select: string): QueryHandler<T> {
    this.query = this.query.populate({
      path,
      select: select === 'all' ? '' : select,
    });

    return this;
  }

  async execute(): Promise<T[]> {
    return this.query;
  }

  async sum(fields: string[]): Promise<T[]> {
    const sumFields = fields.reduce((acc, field) => {
      const sumKey = field.replaceAll('_', '.');
      return {
        ...acc,
        [field]: { $sum: `$${sumKey}` },
      };
    }, {});

    console.log(sumFields, 'sumFields');
    console.log(fields, 'fields');

    const result = this.query.model.aggregate([
      { $match: this.query.getFilter() }, // Get the filtered query
      { $group: { _id: null, ...sumFields } },
    ]);

    console.log(result, 'result');
    return result;
  }

  async getQuery(): Promise<FilterQuery<T>> {
    return this.query.getFilter();
  }
}

export const generateRandomString = (length: number, prefix?: string): string => {
  const nanoid = customAlphabet(
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ',
    length
  );
  return prefix ? `${prefix}-${nanoid()}` : nanoid();
};

export const generateRandomNumber = (length: number): string => {
  const nanoid = customAlphabet('1234567890', length);
  return nanoid();
};

export const createBcryptHash = async (password: string | Buffer) => {
  return await bcrypt.hash(password, 10).catch(() => 'Error creating hash');
};

export const compareBcryptHash = async (password: string | Buffer, hash: string) => {
  return await bcrypt.compare(password, hash).catch(() => 'Error comparing hash');
};

export const setCookie = async (
  req: NextRequest,
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  const cookieStore = await cookies();
  cookieStore.set(name, value, {
    httpOnly: true,
    secure: !isPostman(req),
    path: '/',
    sameSite: 'none',
    partitioned: true,
    ...options,
  });
};

export const sendPushNotification = async (
  token: string,

  message: string,

  payload?: object,

  title?: string
) => {
  try {
    if (!token) {
      console.log('Token not found', token);
      return;
    }

    if (token === undefined || token === '') {
      console.log('Invalid token', token);
      return;
    }
  } catch (error) {
    console.log('Error sending push notification:', error);
  }
};

export const generateCacheKey = (query: Record<string, any>): string => {
  // Convert query object to a string
  const ParsedQs = JSON.stringify(query);

  // Create a hash of the query string
  // Return the hashed key
  return crypto.createHash('md5').update(ParsedQs).digest('hex');
};

export const extractUAData = (
  req: Request
): {
  country: string;
  city: string;
  postalCode: string;
  ipv4: string;
  ipv6: string;
  geo: { lat: string; lng: string };
  region: string;
  continent: string;
  timezone: string;
  os: string;
} => ({
  country: req.headers['cf-ipcountry']?.toString() || '******',
  city: req.headers['cf-ipcity']?.toString() || '******',
  postalCode: req.headers['cf-postal-code']?.toString() || '******',
  ipv4:
    req?.headers['x-forwarded-for']?.[0]?.toString() ||
    req.headers['cf-connecting-ip']?.toString() ||
    '******',
  ipv6: req.headers['x-envoy-external-address']?.toString() || '******',
  geo: {
    lat: req.headers['cf-iplatitude']?.toString() || '******',
    lng: req.headers['cf-iplongitude']?.toString() || '',
  },
  region: req.headers['cf-region']?.toString() || '******',
  continent: req.headers['cf-ipcontinent']?.toString() || '******',
  timezone: req.headers['cf-timezone']?.toString() || '******',
  os: req.headers['sec-ch-ua-platform']?.toString() || '******',
});

export const monitoringAlert = async (message: string, sendToAdmins?: boolean | 'dev') => {
  // const tokens: CacheKey[] = [];
  // switch (sendToAdmins) {
  //   case 'dev':
  //     tokens.push('pers:dev:token');
  //     break;
  //   case true:
  //     tokens.push('pers:dev:token');
  //     break;
  //   default:
  //     console.log(`No case for ${sendToAdmins}`);
  // }
  // console.log('Monitoring alert:', message);
  // for (const token of tokens) {
  //   const pushToken = await redisCache.get(token);
  //   await sendPushNotification(pushToken as string, message);
  // }
};

export const toTitleCase = (str: string) => str.replace(/\b\w/g, char => char.toUpperCase());

export const getNameOrEmail = (person: { firstName?: string; lastName?: string; email: string }) =>
  person?.firstName && person?.lastName
    ? `${person?.firstName} ${person?.lastName}`
    : person?.firstName || person?.email;

export const calculateDelayUntilNextRun = (hour: number): number => {
  const now = new Date();

  // Create the next run time for today at the given hour
  let nextRun = setMilliseconds(setSeconds(setMinutes(setHours(now, hour), 0), 0), 0);

  if (isBefore(nextRun, now)) {
    nextRun = addDays(nextRun, 1);
  }

  console.log('Now:', format(now, 'yyyy-MM-dd HH:mm:ss'));
  console.log('Next Run:', format(nextRun, 'yyyy-MM-dd HH:mm:ss'));

  return nextRun.getTime() - now.getTime();
};

export const rescheduleBackupJob = async () => {
  const jobName = 'dailyBackup';
  const delay = calculateDelayUntilNextRun(3);
  // await mainQueue.add(jobName, { type: 'dailyBackup' }, { delay, jobId: jobName });
};

export const formatTemplateTime = (
  date: Date
): { time: string; timePeriod: 'Morning' | 'Afternoon' | 'Evening' } => {
  const currentHour = date.getHours();
  const timePeriod = currentHour < 12 ? 'Morning' : currentHour < 18 ? 'Afternoon' : 'Evening';

  const dateStr = date
    .toLocaleString('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    })
    .replace(',', '');
  const timeStr = date.toLocaleString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const time = `${dateStr}, ${timeStr}`;

  return { time, timePeriod };
};

export const extractToken = (token: string) => {
  return token?.includes('Token:') ? token.split('Token:')[1] : token;
};

export const generateRequestID = (prefix?: string) => {
  const timezone = 'Africa/Lagos';
  const now = toZonedTime(new Date(), timezone);
  const formattedDate = format(now, 'yyyyMMddHHmm');
  const randomString = generateRandomString(12, prefix);

  return `${formattedDate}x${randomString?.replace('-', '')}`;
};

export const assertENV = (variable: string | undefined, options?: { message: string }) => {
  const { message = 'Required Environment variable is missing or undefined' } = options ?? {};

  if (!variable) {
    throw new Error(message);
  }

  return variable;
};

export const getRoleWithSlug = async (roleSlug: RoleSlug) => {
  const role = await Role.findOne({ slug: roleSlug }).lean();

  if (!role) throw new AppError('RNF: Role not found', 500);

  return role;
};

/**
 * Utility: Removes disallowed fields recursively
 */
export function sanitizeInput<T extends Record<string, any>>(
  data: T,
  allowedRoot: string
): Partial<T> {
  const sanitized: Record<string, any> = {};

  for (const key in data) {
    if (DISALLOWED_FIELDS.includes(key)) continue;
    if (key === allowedRoot) {
      // keep clientData or specialistData as is
      sanitized[key] = data[key];
    } else if (typeof data[key] === 'object' && !Array.isArray(data[key]) && data[key] !== null) {
      // recursively clean nested objects
      sanitized[key] = sanitizeInput(data[key], allowedRoot);
    } else {
      sanitized[key] = data[key];
    }
  }

  return sanitized as Partial<T>;
}

/**
 * Utility: Removes the other specific object field
 * e.g., in updateClient we strip specialistData, and vice versa
 */
export function stripOtherSpecific<T extends Record<string, any>>(
  data: T,
  keepKey: string
): Partial<T> {
  const result = { ...data };
  if (keepKey === 'clientData') delete result['specialistData'];
  if (keepKey === 'specialistData') delete result['clientData'];
  return result;
}
