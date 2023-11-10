import { describe, expect, jest, it } from '@jest/globals';
import { getProductsList } from './handler';

jest.mock('@libs/lambda', () => ({
    middyfy: (handler) => ({
        use: jest.fn().mockReturnValue(handler),
    }),
}));

describe('getProductsList', () => {
    it('should get all products', async () => {
        const res = await getProductsList();

        expect(res.statusCode).toEqual(200);
        expect(typeof res.body).toEqual('string');
        expect(JSON.parse(res.body).products.length).toEqual(8);
    });
});
