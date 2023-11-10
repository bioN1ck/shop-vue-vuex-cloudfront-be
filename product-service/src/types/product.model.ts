export enum GroupTag {
    PRODUCTS = 'Products',
}

export type FunctionResponse = (...event: any) => Promise<{ statusCode: number; body: string }>;
