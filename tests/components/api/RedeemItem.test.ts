import { RedeemItem } from '../../../components/api/RedeemItem'
import { REDEEM_URL, USER_TOKEN } from '../../setupServer'
describe("Api call to redeem items", () => {
    let redeemer = new RedeemItem()
    it("on success, RedeemItem should return an object with the success message", async () => {
        let response = await redeemer.post(REDEEM_URL, USER_TOKEN, "a productId")
        expect(response).toHaveProperty("message", "You've redeemed the product successfully")
    })
    it("on failure, RedeemItem should throw an error", async () => {
        let response = redeemer.post("fake_url", USER_TOKEN, "a productId")
        await expect(response).rejects.toThrow()
    })
})
