import { NextApiRequest, NextApiResponse } from "next";
import { IRedeemItem } from "./RedeemItem";

export class RedeemHandler {
    redeemItem: IRedeemItem
    url: string
    token: string
    constructor(url: string, token: string, redeemItem: IRedeemItem) {
        this.url = url
        this.token = token
        this.redeemItem = redeemItem
    }
    handleRedeemItem(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            let { productId }: { productId: string } = JSON.parse(req.body)
            this.redeemItem.post(this.url, this.token, productId)
                .then(data => res.status(200).json(data))
                .catch(error => res.status(500).json({ error: error.message }))
                .finally(resolve)
        })
    }
    handleInvalidMethod(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            res.status(405).json({ error: req.method + " method is not allowed." })
            resolve()
        })
    }
}