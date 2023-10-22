import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import todoService from '../../services';
import { FunctionResponse } from '../../types/product.model';

export const getProductById: FunctionResponse  = async (event) => {
  const id = event.pathParameters.id;
  const product = await todoService.getProductById(id);
  return formatJSONResponse({ product });
};

export const main = middyfy(getProductById);
