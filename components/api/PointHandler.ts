import { NextApiRequest, NextApiResponse } from "next";
import { IPointsCharge } from "./PointsCharge";

export class PointHandler {
    pointsCharge: IPointsCharge
    url: string
    token: string
    constructor(url: string, token: string, charge: IPointsCharge) {
        this.url = url
        this.token = token
        this.pointsCharge = charge
    }
    async handlePointCharge(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            let { amount } = JSON.parse(req.body)
            this.pointsCharge.chargePoints(this.url, amount, this.token)
                .then(data => res.status(200).json({ data }))
                .catch(err => res.status(400).json({ err }))
                .finally(resolve)
        })
    }
    async handleInvalidMethod(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            res.status(405).send("Method not allowed")
            resolve()
        })
    }
}