import { ValidCharge } from "@types";
import fetchPoints from "../../components/fetchPoints";
import 'whatwg-fetch'

it("Given a valid charge, should redeem points", async () => {
    let points: ValidCharge = 1000
    let response = await fetchPoints(points)
    let json = await response.json()
    expect(json).toEqual({ amount: points })
})