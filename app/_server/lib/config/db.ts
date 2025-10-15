import mongoose, { ConnectOptions } from 'mongoose';
import { logger } from '../utils/logger';
import { ENVIRONMENT } from './environment';
import { seedDb } from '../seed';

/**
 * Global is used to maintain a cached connection across hot reloads in dev
 * to avoid exhausting connection pool.
 */
interface GlobalMongoose {
  conn?: typeof mongoose | null;
  promise?: Promise<typeof mongoose> | null;
}
declare global {
  var myMongoose: GlobalMongoose;
}

const cached = global.myMongoose || (global.myMongoose = { conn: null, promise: null });

export async function connectToDatabase() {
  try {
    if (cached.conn) return cached.conn;

    if (!ENVIRONMENT.DB.URL) {
      logger.error('DB_URL is not provided in the environment variables');
      throw new Error('DB_URL is not provided in the environment variables');
    }

    cached.conn = await mongoose.connect(ENVIRONMENT.DB.URL, {
      autoIndex: true,
    } as ConnectOptions);

    logger.info(`Mongo DB Connected to ${cached.conn.connection.name} DB`);
    await seedDb();

    return cached.conn;
  } catch (error) {
    logger.error('Error: ' + (error as Error).message);
    process.exit(1);
  }
}
