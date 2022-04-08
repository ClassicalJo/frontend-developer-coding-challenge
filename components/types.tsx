export interface RedeemHistory {
    productId: string
}
export interface UserData {
    _id: string;
    name: string;
    points: number;
    createDate: string;
    redeemHistory: RedeemHistory[];
}
export type ProductsData = Product[]

export interface Product {
    _id: string;
    name: string;
    cost: number;
    category: string;
    img: ProductImage;
}

export interface ProductImage {
    url: string;
    hdUrl: string;
}