import { ProductsData, UserData } from '@types'
import "whatwg-fetch"
import { DefaultRequestBody, rest, RestRequest } from 'msw'
import { setupServer } from 'msw/node'
import emptyUserData from '@main/emptyUserData'
import { NextApiRequest, NextApiResponse } from 'next'

type PointsRequestBody = DefaultRequestBody & { amount: number }
type RedeemRequestBody = DefaultRequestBody & { productId: string }

const POINTS_URL = "POINTS_URL"
const USER_URL = "USER_URL"
const USER_TOKEN = "USER_TOKEN"
const PRODUCT_URL = "PRODUCT_URL"
const REDEEM_URL = "REDEEM_URL"
const EMPTY_USER_DATA = JSON.parse(JSON.stringify(emptyUserData))
const EMPTY_PRODUCT_DATA: ProductsData = []
const WRONG_TOKEN = "WRONG_TOKEN"
const FAKE_USER_DATA: UserData = JSON.parse(JSON.stringify({
    "id": "5a03638052fd231590d04eb5",
    "name": "John Kite",
    "points": 2000,
    "redeemHistory": [],
    "createDate": "new Date(1510171520852)"
}))

const FAKE_PRODUCT_DATA: ProductsData = [{
    "_id": "5a033eeb364bf301523e9b92",
    "name": "Sandalia Pale Gold YSL",
    "cost": 200,
    "category": "Indumentaria",
    "img": {
        "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    }
}]

let req = {} as NextApiRequest
let res = {
    status: function (this: NextApiResponse, int: number) {
        this.statusCode = int
        return this
    } as unknown,
    json: function (this: NextApiResponse) {
        return this
    } as unknown
} as NextApiResponse

const server = setupServer(
    rest.get(USER_URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(FAKE_USER_DATA)
        )
    }),
    rest.get(PRODUCT_URL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(FAKE_PRODUCT_DATA)
        )
    }),
    rest.post(REDEEM_URL, (req: RestRequest<RedeemRequestBody>, res, ctx) => {
        if (!req.body.productId) return res(
            ctx.status(400),
            ctx.json({ error: "Body should have productId" })
        )
        return res(
            ctx.status(200),
            ctx.json({ message: "You've redeemed the product successfully" })
        )
    }),
    rest.post(POINTS_URL, (req: RestRequest<PointsRequestBody>, res, ctx) => {
        let validAmounts = [1000, 5000, 1000]
        if (validAmounts.includes(req.body.amount)) return res(
            ctx.status(200),
            ctx.json({ amount: req.body.amount }))
        return res(ctx.status(400), ctx.json({ error: "Enter a valid amount" }))
    }),
    rest.get('/api/user', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(FAKE_USER_DATA)
        )
    }),
    rest.get('/api/redeem', (req: RestRequest<PointsRequestBody>, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ message: "You've redeem the product successfully" })
        )
    }),
    rest.get('*', (req, res, ctx) => {
        // console.error(`Please add request handler for ${req.url.toString()}`)
        return res(
            ctx.status(500),
            ctx.json({ error: `Please add request handler for ${req.url.toString()}` })
        )
    }),
    rest.post('*', (req, res, ctx) => {
        // console.error(`Please add request handler for ${req.url.toString()}`)
        return res(
            ctx.status(500),
            ctx.json({ error: `Please add request handler for ${req.url.toString()}` })
        )
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export {
    server,
    rest,
    USER_TOKEN,
    USER_URL,
    REDEEM_URL,
    PRODUCT_URL,
    FAKE_USER_DATA,
    FAKE_PRODUCT_DATA,
    EMPTY_PRODUCT_DATA,
    EMPTY_USER_DATA,
    WRONG_TOKEN,
    POINTS_URL,
    req,
    res
}