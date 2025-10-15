import { StringOrStringArraySchema } from '@/components/forms/FormTemplate';
import { z } from 'zod';
// import { default as pick } from 'lodash/pick';
// import { SelectOption } from '../types/general';
// import { generateOptionsFromArray } from '../utils/general';

export const ALL_FIELDS_SCHEMA: Record<string, StringOrStringArraySchema> = {
  fullName: z.string().min(3, { error: 'Please enter at least 3 characters' }),
  firstName: z.string({ error: 'Please enter your first name' }),
  lastName: z.string({ error: 'Please enter your last name' }),
  brandName: z.string({ error: 'Please enter your brand name' }),
  contactPerson: z.string({ error: 'Please enter your name' }),
  company: z.string({ error: 'Please enter your company name' }),
  email: z.email({ error: 'Please enter a valid email' }),
  phoneNumber: z
    .string()
    .min(11, { error: 'Please enter at least 11 characters' })
    .max(14, { error: 'Phone number is too long' }),
  billboardLocation: z.string({ error: 'Please enter a value' }),
  startDate: z.string({ error: 'Please enter a value' }),
  endDate: z.string({ error: 'Please enter a value' }),
  message: z.string().min(10, { error: 'Message is not long enough' }),
  additionalNotes: z.string(),
};

export const ALL_FIELDS_DEFAULT: Record<string, string | string[]> = {
  fullName: '',
  firstName: '',
  lastName: '',
  brandName: '',
  contactPerson: '',
  company: '',
  email: '',
  phoneNumber: '',
  billboardLocation: '',
  startDate: '',
  endDate: '',
  message: '',
  additionalNotes: '',
};
