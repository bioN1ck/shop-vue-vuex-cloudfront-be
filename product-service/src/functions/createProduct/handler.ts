import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { productService } from '../../services';
import { CreateProductDTO } from '../../types/api-types';

export const createProduct: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  console.log('createProduct event: ', event);
  const dto = event.body as CreateProductDTO;
  try {
    await productService.createProduct(dto);
    return formatJSONResponse(201,{ message: 'Success' });
  } catch (e) {
    return formatJSONResponse(500, { message: 'Something went wrong' });
  }
};

export const main = middyfy(createProduct);
