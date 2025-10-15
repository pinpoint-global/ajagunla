import { getSiteSettings } from '@/app/_server/controllers/site/settings';
import { applyMiddlewares } from '@/app/_server/middlewares/applyMiddlewares';

export const GET = applyMiddlewares(getSiteSettings);
