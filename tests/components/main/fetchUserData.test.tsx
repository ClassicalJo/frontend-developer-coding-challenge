import fetchUserData from '@main/fetchUserData'
import { UserData } from '@types'
import { Dispatch } from 'react'
import { FAKE_USER_DATA, server, rest } from '../../setupServer'
describe("fetchUserData from the next API", () => {
    let setter = jest.fn() as Dispatch<UserData>
    let errorHandler = jest.fn() as (err: unknown) => void;
    it("Should retrieve user data", async () => {
        await fetchUserData(setter, errorHandler)
        expect(setter).toBeCalledWith(FAKE_USER_DATA)
    })
    it("On error, should call the error function", async () => {
        server.use(
            rest.get("api/user", (req, res, ctx) => res(
                ctx.status(500),
                ctx.json({ error: "There was an error fetching user" })
            )))
        await fetchUserData(setter, errorHandler)
        expect(errorHandler).toBeCalled()
    })
})