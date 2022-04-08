import type { NextApiRequest, NextApiResponse } from 'next'
import fetchPoints from '../../components/fetchPoints'
import { ValidCharge } from '../../components/types'


export default async function pointHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { amount }: { amount: ValidCharge } = JSON.parse(req.body)
    fetchPoints(process.env.POINTSURL, 'POST', amount, process.env.USERTOKEN)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(404).send({ error: "error" })
        })

}
