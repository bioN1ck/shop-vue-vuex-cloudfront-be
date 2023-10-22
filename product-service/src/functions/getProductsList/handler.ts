import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import todoService from '../../services';
import { FunctionResponse } from '../../types/product.model';

export const getProductsList: FunctionResponse = async () => {
  const products = await todoService.getAllProducts();
  return formatJSONResponse({ products });
};

export const main = middyfy(getProductsList);
