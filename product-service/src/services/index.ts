import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { ProductService } from './product.service';

const dynamoDBClient = new DynamoDBClient({ region: 'eu-west-1' });
const documentClient = DynamoDBDocumentClient.from(dynamoDBClient);

export const productService = new ProductService(documentClient);

