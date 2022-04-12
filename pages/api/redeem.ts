import type { NextApiRequest, NextApiResponse } from 'next'
import { RedeemHandler } from '../../components/api/RedeemHandler'
import { RedeemItem } from '../../components/api/RedeemItem'
let redeem = new RedeemHandler(process.env.REDEEMURL, process.env.USERTOKEN, new RedeemItem())

export default async function redeemHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') return redeem.handleRedeemItem(req, res)
    else return redeem.handleInvalidMethod(req, res)
}
