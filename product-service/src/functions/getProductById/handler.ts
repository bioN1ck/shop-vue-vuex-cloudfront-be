import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { productService } from '../../services';

export const getProductById  = async (event) => {
  console.log('getProductById event: ', event);
  const id = event.pathParameters.id;
  try {
    const data = await productService.getProductById(id);
    return formatJSONResponse(200, { data });
  } catch (e) {
    return formatJSONResponse(404, { message: 'Product not found' });
  }
};

export const main = middyfy(getProductById);
