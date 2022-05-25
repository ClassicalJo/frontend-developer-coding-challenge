import fetchInitialData from '@main/fetchInitialData'
import {
    server,
    rest,
    USER_TOKEN,
    USER_URL,
    PRODUCT_URL,
    FAKE_PRODUCT_DATA,
    FAKE_USER_DATA,
    EMPTY_PRODUCT_DATA,
    EMPTY_USER_DATA
} from '../setupServer'

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
                    ctx.json({ success: false, message: "Authentication failed" }))
            })
        )
        let { props } = await fetchInitialData(USER_TOKEN, PRODUCT_URL, USER_URL)
        let { userData, productsData } = props
        expect(userData).toEqual(EMPTY_USER_DATA)
        expect(productsData).toEqual(EMPTY_PRODUCT_DATA)
    })
})



