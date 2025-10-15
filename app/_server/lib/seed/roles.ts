import { Role } from '../../models/role';
import { Permission } from '../types/constants';
import { logger } from '../utils/logger';

export type PERMISSION_SLUGS = 'upsert-admin' | 'upsert-roles';

export const ADMIN_PERMISSIONS: Permission[] = [
  {
    name: 'Create admin user',
    description: 'Create, delete, re-invite, suspend admin users',
    slug: 'upsert-admin',
    isRestricted: true,
  },
];

export const ROLES_DATA = [
  {
    name: 'Super Admin',
    description: 'Super Admin Role',
    slug: 'super-admin',
    permissions: [...ADMIN_PERMISSIONS],
  },
  {
    name: 'Admin',
    description: 'Admin Role',
    slug: 'admin',
    permissions: [],
  },
  {
    name: 'User',
    description: 'User Role',
    slug: 'user',
    permissions: [],
  },
];

export const ROLE_SLUGS = ['super-admin', 'admin', 'user'] as const;
export type RoleSlug = (typeof ROLE_SLUGS)[number];

export const seedRolesAndPermissions = async () => {
  for (const role of ROLES_DATA) {
    // create role if not exists
    const rawResult = await Role.findOneAndUpdate(
      { slug: role.slug },
      {
        $set: {
          name: role.name,
          description: role.description,
          permissions: (role.permissions || []).map(p => ({
            name: p.name,
            description: p.description,
            slug: p.slug,
            isRestricted: p.isRestricted,
          })),
        },
        $setOnInsert: {
          slug: role.slug,
          // any fields you want initialized only on insert
        },
      },
      {
        upsert: true,
        new: true,
        includeResultMetadata: true,
        runValidators: true, // validate against schema
        setDefaultsOnInsert: true, // apply schema defaults on insert
        context: 'query', // useful for some validators that need query context
      }
    );

    if (!rawResult || !rawResult.value) continue;
    const createdRole = rawResult.value.toObject();

    logger.info(
      `${createdRole.slug} role ${rawResult.lastErrorObject?.updatedExisting ? 'updated' : 'created'}`
    );
    // addToCache(`pers:roleKeys:${role.slug}`, JSON.stringify(createdRole));
  }
};
