import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import createError from 'http-errors';

import todoService from '../../services';

export const getProductById  = async (event) => {
  const id = event.pathParameters.id;
  const product = await todoService.getProductById(id);
  if (!product) {
    throw new createError.NotFound('Product not found');
  }
  return formatJSONResponse({ product });
};

export const main = middyfy(getProductById);
