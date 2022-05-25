import fetchRedeem from "../../components/fetchRedeem";

describe("Testing utility to redeem products", () => {
    it("given a productID, should redeem it", async () => {
        let response = await fetchRedeem("productId")
        let json = await response.json()
        expect(json).toEqual({message: "You've redeemed the product successfully"})
    })
    it("If productId is empty, should return an object with an error", async () => {
        let response = await fetchRedeem("")
        let json = await response.json()
        expect(json).toEqual({error: "Body should have productId"})
    })
})