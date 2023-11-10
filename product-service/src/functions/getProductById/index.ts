import { handlerPath } from '@libs/handler-resolver';
import {GroupTag} from "../../types/product.model";

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'product/{id}/',
        summary: 'Get product',
        description: 'Retrieve a product by ID',
        swaggerTags: [GroupTag.PRODUCTS],
        responses: {
          200: {
            description: 'Successful API response',
            bodyType: 'ProductResponse',
          },
          404: {
            description: 'Product not found',
          },
          500: {
            description: 'Server error'
          },
        },
      },
    },
  ],
};
