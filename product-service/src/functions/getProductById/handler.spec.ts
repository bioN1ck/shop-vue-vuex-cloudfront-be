import { describe, expect, jest, it } from '@jest/globals';
import { getProductById } from './handler';
import mockedEvent from './mock.json';

jest.mock('@libs/lambda', () => ({
    middyfy: (handler) => ({
        use: jest.fn().mockReturnValue(handler),
    }),
}));

describe('getProductById', () => {
    it('should get a product', async () => {
        const event = mockedEvent as any;
        const response = await getProductById(event, null, null);

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toEqual('string');
        expect(typeof JSON.parse(response.body)).toEqual('object');
        expect(JSON.parse(response.body)).toHaveProperty('product');
        expect(JSON.parse(response.body).product.id).toEqual(event.pathParameters.id);
    });
});
