// import parsePhoneNumber from 'libphonenumber-js';
// import { isObjectIdOrHexString } from 'mongoose';
import { z } from 'zod';

// const verifyPhoneNumber = (value: string) => {
//   if (value.startsWith('234') || value.startsWith('+')) return false;
//   const number = parsePhoneNumber(`+234${value}`, 'NG');
//   return number?.isValid();
// };

export const mainSchema = z.object({
  firstName: z
    .string()
    .min(2, { error: 'First name cannot be empty!' })
    .max(50, { error: 'First name is too long!' }),
  lastName: z
    .string()
    .min(2, { error: 'Last name cannot be empty!' })
    .max(50, { error: 'Last name is too long!' }),
  phoneNumber: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\+[1-9]\d{1,14}$/, 'Invalid phone number format (must be in E.164 format)'),
  email: z.email({ error: 'Please enter a valid email address!' }).max(50, 'Email is too long!'),
  password: z
    .string({ error: 'Please enter your password' })
    .min(8, { error: 'Password must be at least 8 characters' }),
  currentPassword: z
    .string({ error: 'Please enter your password' })
    .min(8, { error: 'Password must be at least 8 characters' }),
  confirmPassword: z
    .string({ error: 'Please enter your password' })
    .min(8, { error: 'Password must be at least 8 characters' }),
  userRole: z.enum(['user'], {
    error: 'UserRole must be either "client" or "specialist"',
  }),
  code: z.string().min(6, 'Code must be 6 characters!').max(6, 'Code must be 6 characters!'),
  scope: z.string(),
  scopeToken: z.string(),
  googleCode: z.string(),
  userUpdate: z.object(),
});

// Define the partial for partial validation
export const partialMainSchema = mainSchema.partial();
