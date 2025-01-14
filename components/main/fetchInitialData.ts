import authHeader from "../authHeader"
import emptyUserData from "./emptyUserData"
export default async function fetchInitialData(token: string, productUrl: string, userUrl: string) {
    const headers = authHeader(token)
    let productsFetch = fetch(productUrl, { headers })
    let userFetch = fetch(userUrl, { headers })
    try {
        let [products, user] = await Promise.all([productsFetch, userFetch])
        let productsData = await products.json()
        let userData = await user.json()
        if (productsData?.success === false) throw Error(productsData.message)
        if (userData?.success === false) throw Error(userData.message)
        return { props: { productsData, userData } }
    } catch (error) {
        return { props: { productsData: [], userData: JSON.parse(JSON.stringify(emptyUserData)) } }
    }
}

