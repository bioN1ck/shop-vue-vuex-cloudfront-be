import { handlerPath } from '@libs/handler-resolver';

import schema from './schema';
import { GroupTag } from '../../types/product.model';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'products/',
        summary: 'Create a product',
        description: '',
        swaggerTags: [GroupTag.PRODUCTS],
        bodyType: 'CreateProductDTO',
        responses: {
          201: {
            description: 'Product was successfully created',
          },
          400: {
            description: 'Validation error',
          },
          500: {
            description: 'Server error',
          }
        },
        request: {
          schemas: {
            'application/json': schema,
          },
        },
      },
    },
  ],
};
