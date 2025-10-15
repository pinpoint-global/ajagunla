/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest } from 'next/server';
import { protectRoutes } from '../../middlewares/protectRoutes';
import { ACCESS_TYPES } from '../types/constants';
import { RequestBody, validateRequest } from '../../middlewares/validateRequest';

export type RequestContext = {
  req: NextRequest;
  user?: any;
  body: RequestBody;
};

export function withRequestContext({
  accessType,
  protect = false,
}: {
  accessType: ACCESS_TYPES;
  protect?: boolean;
}) {
  return function <T extends (ctx: RequestContext) => Promise<Response>>(fn: T) {
    return async (req: NextRequest): Promise<Response> => {
      let user: any = null;
      if (protect) user = protectRoutes(accessType)(req);

      const body = await validateRequest(req);

      return fn({ req, user, body });
    };
  };
}
