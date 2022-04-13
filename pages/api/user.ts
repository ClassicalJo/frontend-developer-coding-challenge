import type { NextApiRequest, NextApiResponse } from 'next'
import { PointsCharge } from '../../components/api/PointsCharge'
import { UserFetch } from '../../components/api/UserFetch'
import { UserHandler } from '../../components/api/UserHandler'

let user = new UserHandler(
    process.env.POINTSURL,
    process.env.USERURL,
    process.env.USERTOKEN,
    new UserFetch(),
    new PointsCharge()
)


export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') return user.handleFetchUser(req, res)
    else if (req.method === "POST") return user.handlePointCharge(req, res)
    else return user.handleInvalidMethod(req, res)
}
