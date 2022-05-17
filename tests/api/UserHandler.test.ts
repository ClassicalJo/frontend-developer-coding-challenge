import { NextApiRequest, NextApiResponse } from "next"
import { PointsCharge } from "../../components/api/PointsCharge"
import { UserFetch } from "../../components/api/UserFetch"
import { UserHandler } from "../../components/api/UserHandler"
import userHandler from '../../pages/api/user'
import { FAKE_USER_DATA, POINTS_URL, USER_TOKEN, USER_URL } from "../setupServer"

describe("Route handler for UserData related requests", () => {
    const userFetch = new UserFetch()
    const pointsCharge = new PointsCharge()
    const handler = new UserHandler(
        POINTS_URL,
        USER_URL,
        USER_TOKEN,
        userFetch,
        pointsCharge,
    )
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
    it("handleFetchUser should call userFetch's get method and respond with data", async () => {
        jest.spyOn(userFetch, "get")
        jest.spyOn(res, 'json')
        await handler.handleFetchUser(req, res)
        expect(userFetch.get).toHaveBeenCalled()
        expect(res.json).toBeCalledWith(FAKE_USER_DATA)

    })
    it("handlePointsCharge should call pointCharge's post method", async () => {
        const FAKE_AMOUNT = { amount: 1000 }
        let req = { body: JSON.stringify(FAKE_AMOUNT) } as NextApiRequest
        jest.spyOn(pointsCharge, "post")
        await handler.handlePointCharge(req, res)
        expect(pointsCharge.post).toHaveBeenCalled()

    })
    it("handlePointsCharge should respond with correct data", async () => {
        const FAKE_AMOUNT = { amount: 1000 }
        let req = { body: JSON.stringify(FAKE_AMOUNT) } as NextApiRequest
        jest.spyOn(res, 'json')
        await handler.handlePointCharge(req, res)
        expect(res.json).toBeCalledWith(FAKE_AMOUNT)
    })

    it("if called with no amount in the body, handlePointsCharge should respond with bad request", async () => {
        let req = { body: JSON.stringify({}) } as NextApiRequest
        jest.spyOn(res, 'status')
        await handler.handlePointCharge(req, res)
        expect(res.status).toBeCalledWith(400)
    })

    it('if called with an incorrect amount, handlePointsCharge should catch an error and return with bad request', async () => {
        let req = { body: JSON.stringify({ amount: 3000 }) } as NextApiRequest
        jest.spyOn(res, 'status')
        await handler.handlePointCharge(req, res)
        expect(res.status).toBeCalledWith(400)
    })
    it("handleFetchUser should return a promise to avoid unterminated api responses", async () => {
        const response = handler.handleFetchUser(req, res)
        expect(response).toEqual(new Promise<void>(() => { }))
    })
    it("handlePointCharge should return a promise to avoid unterminated api responses", async () => {
        const FAKE_AMOUNT = { amount: 1000 }
        let req = { body: JSON.stringify(FAKE_AMOUNT) } as NextApiRequest
        const response = handler.handlePointCharge(req, res)
        expect(response).toEqual(new Promise<void>(() => { }))
    })
})