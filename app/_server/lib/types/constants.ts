/* eslint-disable @typescript-eslint/no-explicit-any */

import { LucideIconName } from '@/components/general/DynamicIcon';
import mongoose from 'mongoose';

export interface IUser {
  _id: mongoose.Types.ObjectId;
  googleId?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  avatar?: string;
  accountStatus: AccountStatus;
  email: string;
  phoneNumber: string;
  gender?: Gender;
  auth: UserAuth;
  kyc: KYC;
  isDeleted?: boolean;
  deleteRequestedAt?: Date;
  deletionApprovedAt?: Date;
  deletionApprovedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAdmin {
  _id: mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  accountStatus: AccountStatus;
  auth: UserAuth;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAuth {
  password?: {
    value: string;
    passwordChangedAt?: Date;
  };
  roles: AuthUserRole[];
  lastLogin?: string;
  refreshTokenJTI?: string;
}

export interface AuthUserRole {
  roleId: string;
  slug: string;
}

export interface IRole {
  _id: mongoose.Types.ObjectId;
  name: string;
  slug: string;
  description: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Permission {
  slug: string;
  name: string;
  description: string;
  isRestricted?: boolean;
}

export interface KYC {
  email: {
    isVerified: boolean;
    data: any;
  };
  phoneNumber: {
    isVerified: boolean;
    data: any;
  };
}

export interface IProject {
  _id: mongoose.Types.ObjectId;
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
  year: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IService {
  _id: mongoose.Types.ObjectId;
  slug: string;
  iconName: LucideIconName;
  colorClass: string;
  title: string;
  description: string;
  href: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TOKEN_SCOPE = 'verify-email' | 'reset-password';
export type ACCESS_TYPES = 'client' | 'console';

export const USER_ROLES = ['customer', 'admin', 'super-admin'] as const;
export type UserRole = (typeof USER_ROLES)[number];

export const GENDERS = ['male', 'female', 'others'] as const;
export type Gender = (typeof GENDERS)[number];

export const ACCOUNT_STATUSES = [
  'unverified',
  'active',
  'suspended',
  'deleted',
  'blacklisted',
] as const;
export type AccountStatus = (typeof ACCOUNT_STATUSES)[number];

export interface IModelIndex {
  find: any;
}

export type ModelUser = IUser & IModelIndex & Document;
export type ModelRole = IRole & IModelIndex & Document;
export type ModelAdmin = IAdmin & IModelIndex & Document;
export type ModelProject = IProject & IModelIndex & Document;
export type ModelService = IService & IModelIndex & Document;
