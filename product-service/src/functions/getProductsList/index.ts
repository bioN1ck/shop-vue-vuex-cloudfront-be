import { handlerPath } from '@libs/handler-resolver';
import { GroupTag } from '../../types/product.model';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/',
        summary: 'Get products',
        description: 'Retrieve a list of products',
        swaggerTags: [GroupTag.PRODUCTS],
        responses: {
          200: {
            description: 'Successful API response',
            bodyType: 'ProductsListResponse',
          },
          500: {
            description: 'Server error'
          },
        },
      },
    },
  ],
};
