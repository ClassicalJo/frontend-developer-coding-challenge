import { ValidCharge } from '@types'
import { PointsCharge } from '../../components/api/PointsCharge'
import { USER_TOKEN, POINTS_URL } from '../setupServer'

describe("Api call to charge points to the account", () => {
    it("on success, chargepoints should return an object with the appropiate amount", async () => {
        let pointCharger = new PointsCharge()
        let amount: ValidCharge = 1000
        let response = await pointCharger.post(POINTS_URL, amount, USER_TOKEN)
        expect(response).toHaveProperty("amount", amount)
    })
    it("on failure, chargePoints should throw an error", async () => {
        let pointCharger = new PointsCharge()
        let amount: ValidCharge = 1000
        let response = pointCharger.post("fake_url", amount, USER_TOKEN)
        await expect(response).rejects.toThrow()
    })
})
