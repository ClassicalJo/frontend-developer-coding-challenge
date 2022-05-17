import { UserFetch } from '../../../components/api/UserFetch'
import { FAKE_USER_DATA, USER_TOKEN, USER_URL } from '../../setupServer'

describe("Api call to retrieve user data", () => {
    it("on success, userFetch should return an UserData object", async () => {
        let userFetch = new UserFetch()
        let response = await userFetch.get(USER_URL, USER_TOKEN)
        expect(response).toEqual(FAKE_USER_DATA)
    })

    it("on failure, userFetch should throw an error", async () => {
        let userFetch = new UserFetch()
        let response = userFetch.get("fake_url", USER_TOKEN)
        await expect(response).rejects.toThrow()
    })
})
