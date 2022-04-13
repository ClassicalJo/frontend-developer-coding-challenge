import { NextApiRequest, NextApiResponse } from "next"
import { IPointsCharge } from "./PointsCharge"
import { IUserFetch } from "./UserFetch"

export class UserHandler {
    points: string;
    user: string;
    token: string;
    userFetch: IUserFetch;
    pointsCharge: IPointsCharge;
    constructor(points: string, user: string, token: string, userFetch: IUserFetch, pointsCharge: IPointsCharge) {
        this.points = points
        this.user = user
        this.token = token
        this.userFetch = userFetch
        this.pointsCharge = pointsCharge
    }
    handlePointCharge(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            let { amount } = JSON.parse(req.body)
            this.pointsCharge.chargePoints(this.points, amount, this.token)
                .then(data => res.status(200).json(data))
                .catch(err => res.status(400).json(err))
                .finally(resolve)
        })
    }
    handleInvalidMethod(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            res.status(405).send("Method not allowed")
            resolve()
        })
    }
    handleFetchUser(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            this.userFetch.get(this.user, this.token)
                .then(data => res.json(data))
                .catch(err => res.json({ error: err }))
                .finally(resolve)
        })
    }
}
    