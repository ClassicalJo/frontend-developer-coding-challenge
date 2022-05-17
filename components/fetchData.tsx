import authHeader from "./authHeader"
type SuccessMessage<T> = T
type ErrorMessage = { error: any }
type Result<T> = SuccessMessage<T> | ErrorMessage

export default async function fetchData<T>(url: string, method: string, token: string): Promise<Result<T>> {
    let headers = authHeader(token)
    try {
        const res = await fetch(url, { headers, method })
        const data = await res.json()
        if (data?.success === false) throw Error(data?.message)
        return data
    }
    catch (error) {
        return { error }
    }
}