import { NextApiRequest } from "next"
import { RedeemHandler } from "../../../components/api/RedeemHandler"
import { RedeemItem } from "../../../components/api/RedeemItem"
import { REDEEM_URL, req, res, USER_TOKEN } from "../../setupServer"

describe("Route handler for Product related requests to next's API", () => {
    const redeemer = new RedeemItem()
    const handler = new RedeemHandler(REDEEM_URL, USER_TOKEN, redeemer)

    it("handleRedeemitem should call redeemers's post method and respond with a success message", async () => {
        const body = JSON.stringify({ productId: "someProductID" })
        const req = { body } as NextApiRequest
        jest.spyOn(redeemer, "post")
        jest.spyOn(res, 'json')
        await handler.handleRedeemItem(req, res)
        expect(redeemer.post).toHaveBeenCalled()
        expect(res.json).toBeCalledWith({ message: "You've redeemed the product successfully" })

    })
    it("if called with no productId in the body, handleRedeemItem should respond with bad request", async () => {
        let req = { body: JSON.stringify({}) } as NextApiRequest
        jest.spyOn(res, 'status')
        await handler.handleRedeemItem(req, res)
        expect(res.status).toBeCalledWith(400)
    })

    it("handleRedeemItem should return a promise to avoid unterminated api responses", async () => {
        const body = JSON.stringify({ productId: "someProductID" })
        let req = { body } as NextApiRequest
        const response = handler.handleRedeemItem(req, res)
        expect(response).toEqual(new Promise<void>(() => { }))
    })

    it("handleInvalidMethod should return a promise to avoid unterminated api responses", async () => {
        const response = handler.handleInvalidMethod(req, res)
        expect(response).toEqual(new Promise<void>(() => { }))
    })
    it("handleInvalidMethod should respond with a 405 status code", async () => {
        jest.spyOn(res, 'status')
        await handler.handleInvalidMethod(req, res)
        expect(res.status).toBeCalledWith(405)
    })
    // it("handlePointCharge should return a promise to avoid unterminated api responses", async () => {
    //     const FAKE_AMOUNT = { amount: 1000 }
    //     let req = { body: JSON.stringify(FAKE_AMOUNT) } as NextApiRequest
    //     const response = handler.handlePointCharge(req, res)
    //     expect(response).toEqual(new Promise<void>(() => { }))
    // })
})