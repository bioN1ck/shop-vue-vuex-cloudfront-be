import {
    CreateProductDTO,
    Product,
    ProductWithStock,
    Stock
} from '../types/api-types';
import { v4 as uuid } from 'uuid';
import {
    DynamoDBDocumentClient,
    ScanCommand,
    TransactGetCommand,
    TransactWriteCommand,
} from '@aws-sdk/lib-dynamodb';


export class ProductService {

    private readonly productsTableName = process.env.PRODUCTS_TABLE_NAME;
    private readonly stocksTableName = process.env.STOCKS_TABLE_NAME;

    constructor(private readonly docClient: DynamoDBDocumentClient) {}

    async createProduct({ title, description, price, count }: CreateProductDTO): Promise<void> {
        const productId = uuid();
        const command = new TransactWriteCommand({
            TransactItems: [
                {
                    Put: {
                        TableName: this.productsTableName,
                        Item: {
                            id: productId,
                            title,
                            description,
                            price,
                        },
                    },
                },
                {
                    Put: {
                        TableName: this.stocksTableName,
                        Item: {
                            productId,
                            count,
                        },
                    },
                },
            ],
        });

        await this.docClient.send(command);
    }

    async getAllProducts(): Promise<ProductWithStock[]> {
        const productsCommand = new ScanCommand({ TableName: this.productsTableName });
        const { Items: products } = await this.docClient.send(productsCommand);

        const stocksCommand = new ScanCommand({ TableName: this.stocksTableName });
        const { Items: stocks } = await this.docClient.send(stocksCommand);

        return (products as Product[]).map(product => ({
            ...product,
            count: (stocks as Stock[]).find(s => s.productId === product.id)?.count ?? 0,
        }));
    }

    async getProductById(id: string): Promise<ProductWithStock> {
        const command = new TransactGetCommand({
            TransactItems: [
                {
                    Get: {
                        Key: { id },
                        TableName: this.productsTableName,
                    },
                },
                {
                    Get: {
                        Key: { productId: id },
                        TableName: this.stocksTableName,
                    },
                },
            ]
        });

        const {
            Responses: [
                { Item: product },
                { Item: stock },
            ]
        } = await this.docClient.send(command);

        if (!product || !stock) {
            throw new Error('No records');
        }

        return {
            ...(product as Product),
            count: (stock as Stock).count,
        };
    }
}
