import { NextApiRequest, NextApiResponse } from "next"
import { IPointsCharge } from "./PointsCharge"
import { IUserFetch } from "./UserFetch"

export class UserHandler {
    pointsURL: string;
    userURL: string;
    token: string;
    userFetch: IUserFetch;
    pointsCharge: IPointsCharge;
    constructor(points: string, user: string, token: string, userFetch: IUserFetch, pointsCharge: IPointsCharge) {
        this.pointsURL = points
        this.userURL = user
        this.token = token
        this.userFetch = userFetch
        this.pointsCharge = pointsCharge
    }
    handlePointCharge(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            let body = JSON.parse(req.body)
            this.pointsCharge.post(this.pointsURL, body.amount, this.token)
                .then(data => res.status(200).json(data))
                .catch((error: Error) => res.status(400).json({ error: error.message }))
                .finally(resolve)
        })
    }
    handleInvalidMethod(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            res.status(405).json({ error: req.method + " method is not allowed." })
            resolve()
        })
    }
    handleFetchUser(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            this.userFetch.get(this.userURL, this.token)
                .then(data => res.json(data))
                .catch((error: Error) => res.status(500).json({ error: error.message }))
                .finally(resolve)
        })
    }
}
