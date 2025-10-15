import { NextRequest, NextResponse } from 'next/server';
import { errorHandler } from './errorHandler';

type CatchAsyncFunction = (req: NextRequest) => Promise<NextResponse>;
export const catchAsync = (fn: CatchAsyncFunction) => {
  return (req: NextRequest) => {
    fn(req).catch(err => errorHandler(err));
  };
};
