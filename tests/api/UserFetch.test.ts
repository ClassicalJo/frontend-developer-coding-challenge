import { ValidCharge } from '@types'
import { NextApiRequest } from 'next'
import { PointsCharge } from '../../components/api/PointsCharge'
import { UserFetch } from '../../components/api/UserFetch'
import { UserHandler } from '../../components/api/UserHandler'
import {
    server,
    rest,
    USER_TOKEN,
    USER_URL,
    PRODUCT_URL,
    FAKE_PRODUCT_DATA,
    FAKE_USER_DATA,
    EMPTY_PRODUCT_DATA,
    EMPTY_USER_DATA,
    POINTS_URL
} from '../setupServer'

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
