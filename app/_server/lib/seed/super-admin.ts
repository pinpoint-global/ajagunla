import { Admin } from '../../models/admin';
import { IAdmin } from '../types/constants';
import { AppError } from '../utils/appError';
import { createBcryptHash, generateRandomString, getRoleWithSlug } from '../utils/helpers';
import { logger } from '../utils/logger';

export const DEFAULT_SUPER_ADMIN: Omit<IAdmin, '_id' | 'auth' | 'createdAt' | 'updatedAt'> = {
  firstName: 'Super',
  lastName: 'Admin',
  email: 'codegiyu@gmail.com',
  accountStatus: 'active',
};

export const seedSuperAdmin = async () => {
  const hashedPassword = await createBcryptHash('Password123');
  const JTI = generateRandomString(16, 'JTI');
  const superAdminRole = await getRoleWithSlug('super-admin');

  if (!superAdminRole) {
    throw new AppError('Error seeding super admin: Super Admin role not found', 500);
  }

  // create superadmin if not exists
  const rawResult = await Admin.findOneAndUpdate(
    { email: DEFAULT_SUPER_ADMIN.email },
    {
      $set: {
        'auth.refreshTokenJTI': JTI,
        'auth.roles': [{ roleId: superAdminRole._id, slug: superAdminRole.slug }],
        'auth.permissions': superAdminRole.permissions,
        'auth.lastLogin': new Date(),
      },
      $setOnInsert: {
        firstName: DEFAULT_SUPER_ADMIN.firstName,
        lastName: DEFAULT_SUPER_ADMIN.lastName,
        email: DEFAULT_SUPER_ADMIN.email,
        accountStatus: DEFAULT_SUPER_ADMIN.accountStatus,
        'auth.password.value': hashedPassword,
      },
    },
    {
      upsert: true,
      new: true,
      includeResultMetadata: true,
      runValidators: true,
      setDefaultsOnInsert: true,
      context: 'query',
    }
  );

  if (!rawResult || !rawResult.value) {
    throw new AppError('Error seeding superAdmin: findOneAndUpdate failed!', 500);
  }

  logger.info(
    `Super Admin account ${rawResult.lastErrorObject?.updatedExisting ? 'updated' : 'created'}`
  );
};
