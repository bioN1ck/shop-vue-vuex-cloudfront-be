import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { productService } from '../../services';
import { FunctionResponse } from '../../types/product.model';

export const getProductsList: FunctionResponse = async () => {
  console.log('getProductList');
  try {
    const data = await productService.getAllProducts();
    return formatJSONResponse(200, { data });
  } catch (e) {
    return formatJSONResponse(500, { message: 'Something went wrong...' });
  }
};

export const main = middyfy(getProductsList);
