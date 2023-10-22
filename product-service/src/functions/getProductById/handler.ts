import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import todoService from '../../services';
import schema from './schema';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<typeof schema>  = async (event) => {
  const id = event.pathParameters.id;
  const product = await todoService.getProductById(id);
  return formatJSONResponse({ product });
};

export const main = middyfy(getProductsList);
