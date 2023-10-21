
export default class ProductService {

    async getAllProducts(): Promise<any> {
        return [
                {
                    count: 4,
                    description: '[MOCK_SERV] Short Product Description1',
                    id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
                    price: 2.4,
                    title: '[MOCK_SERV] ProductOne'
                },
                {
                    count: 6,
                    description: '[MOCK_SERV] Short Product Description3',
                    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a0',
                    price: 10,
                    title: '[MOCK_SERV] ProductNew'
                },
                {
                    count: 7,
                    description: '[MOCK_SERV] Short Product Description2',
                    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a2',
                    price: 23,
                    title: '[MOCK_SERV] ProductTop'
                },
                {
                    count: 12,
                    description: '[MOCK_SERV] Short Product Description7',
                    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
                    price: 15,
                    title: '[MOCK_SERV] ProductTitle'
                },
                {
                    count: 7,
                    description: '[MOCK_SERV] Short Product Description2',
                    id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
                    price: 23,
                    title: '[MOCK_SERV] Product'
                },
                {
                    count: 8,
                    description: '[MOCK_SERV] Short Product Description4',
                    id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',
                    price: 15,
                    title: '[MOCK_SERV] ProductTest'
                },
                {
                    count: 2,
                    description: '[MOCK_SERV] Short Product Descriptio1',
                    id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',
                    price: 23,
                    title: '[MOCK_SERV] Product2'
                },
                {
                    count: 3,
                    description: '[MOCK_SERV] Short Product Description7',
                    id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
                    price: 15,
                    title: '[MOCK_SERV] ProductName'
                }
            ];
    }
}
