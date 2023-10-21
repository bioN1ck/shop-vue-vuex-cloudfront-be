import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import todoService from '../../services';

const getProductsList = async () => {
  const products = await todoService.getAllProducts();
  return formatJSONResponse({ products });
};

export const main = middyfy(getProductsList);
