import type { NextApiRequest, NextApiResponse } from 'next'
import { PointHandler } from '../../components/api/PointHandler'
import { PointsCharge } from '../../components/api/PointsCharge'
import { UserFetch } from '../../components/api/UserFetch'
import { UserHandler } from '../../components/api/UserHandler'

let user = new UserHandler(process.env.USERURL, process.env.USERTOKEN, new UserFetch())
let points = new PointHandler(process.env.POINTSURL, process.env.USERTOKEN, new PointsCharge())

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') return user.handleFetchUser(req, res)
    else if (req.method === "POST") return points.handlePointCharge(req, res)
    else return points.handleInvalidMethod(req, res)

}
