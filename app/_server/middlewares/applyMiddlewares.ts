import { NextRequest } from 'next/server';
import { withErrorHandling } from './errorHandler';
import { withTimeout } from './timeout';
import { logger } from '../lib/utils/logger';
import { connectToDatabase } from '../lib/config/db';

type Handler = (req: NextRequest) => Promise<Response>;

export function applyMiddlewares(handler: Handler, options?: { timeoutMs?: number }): Handler {
  return async (req: NextRequest) => {
    logger.info(`[${req.method}] ${req.url}`);
    await connectToDatabase();

    // Wrap in middleware chain
    const composedHandler = withErrorHandling(withTimeout(handler, options?.timeoutMs));

    // Execute wrapped handler
    return composedHandler(req);
  };
}
