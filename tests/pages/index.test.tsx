import React from 'react'
import { render } from '@testing-library/react'
import Home, { getServerSideProps } from '@pages/index'
import { ProductsData, UserData } from '@types'
import fetchAllData from '@main/fetchInitialData'
import "whatwg-fetch"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import emptyUserData from '@main/emptyUserData'
import fetchInitialData from '@main/fetchInitialData'

const USER_URL = "USER_URL"
const USER_TOKEN = "USER_TOKEN"
const PRODUCT_URL = "PRODUCT_URL"
const EMPTY_USER_DATA = JSON.parse(JSON.stringify(emptyUserData))
const EMPTY_PRODUCT_DATA: ProductsData = []
const WRONG_TOKEN = "WRONG_TOKEN"
const FAKE_USER_DATA = JSON.parse(JSON.stringify({
    "id": "5a03638052fd231590d04eb5",
    "name": "John Kite",
    "points": 2000,
    "redeemHistory": [],
    "createDate": "new Date(1510171520852)"
}))

const FAKE_PRODUCT_DATA = [{
    "_id": "5a033eeb364bf301523e9b92",
    "name": "Sandalia Pale Gold YSL",
    "cost": 200,
    "category": "Indumentaria",
    "img": {
        "url": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
        "hdUrl": "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png"
    }
}]

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
    rest.get('*', (req, res, ctx) => {
        console.error(`Please add request handler for ${req.url.toString()}`)
        return res(
            ctx.status(500),
            ctx.json({ error: `Please add request handler for ${req.url.toString()}` })
        )
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())


describe("Home page", () => {
    it("Function should fetch data from the server", async () => {
        let { props } = await fetchInitialData(USER_TOKEN, PRODUCT_URL, USER_URL)
        let { userData, productsData } = props
        expect(productsData).toEqual(FAKE_PRODUCT_DATA)
        expect(userData).toEqual(FAKE_USER_DATA)
    })
    it("Handles failure providing an empty productData and emptyUserData ", async () => {
        server.use(
            rest.get(USER_URL, (req, res, ctx) => {
                return res(ctx.status(404))
            }),
            rest.get(PRODUCT_URL, (req, res, ctx) => {
                return res(ctx.status(404))
            })
        )
        let { props } = await fetchInitialData(USER_TOKEN, PRODUCT_URL, USER_URL)
        let { userData, productsData } = props
        expect(userData).toEqual(EMPTY_USER_DATA)
        expect(productsData).toEqual(EMPTY_PRODUCT_DATA)
    })
    it("Handles auth error providing an empty productData and emptyUserData", async () => {
        server.use(
            rest.get(USER_URL, (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json({success: false, message: "Authentication failed"}))
            })
        )
        let { props } = await fetchInitialData(USER_TOKEN, PRODUCT_URL, USER_URL)
        let { userData, productsData } = props
        expect(userData).toEqual(EMPTY_USER_DATA)
        expect(productsData).toEqual(EMPTY_PRODUCT_DATA)
    })
})



