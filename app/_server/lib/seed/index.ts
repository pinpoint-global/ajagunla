import { seedRolesAndPermissions } from './roles';
import { seedSuperAdmin } from './super-admin';

export const seedDb = async () => {
  // await seedDefaultSettings(false); // always leave it as false else it will reset the settings
  /*
    Flush: true will drop the volatile redis on server startup,
    Both: true will drop both volatile and persistent redis on server startup
  */
  // await flushCache({
  //   flushVolatileCache: true,
  //   flushPersistentCache: true,
  //   flushQueues: true,
  // });
  await seedRolesAndPermissions();
  await seedSuperAdmin();
};
