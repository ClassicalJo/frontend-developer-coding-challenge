import authHeader from "./authHeader"
import { FetchData } from "./types"

export default async function fetchData(url: string, method: string, token: string): Promise<FetchData> {
    let headers = authHeader(token)
    try {
        const res = await fetch(url, { headers, method })
        const data = await res.json()
        return data
    }
    catch (err) {
        let error = new Error("Error while fetching data on url " + url)
        return { error: error.message }
    }
}