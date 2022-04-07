export interface RedeemHistory {
    productId: string
}
export interface Data {
    _id: string;
    name: string;
    points: number;
    createDate: Date;
    redeemHistory: RedeemHistory[];
}