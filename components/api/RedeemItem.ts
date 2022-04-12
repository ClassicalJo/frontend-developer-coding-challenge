import authHeader from "../authHeader"

interface SuccessMessage {
    message: string
}
interface ErrorMessage {
    error: string
}
type Result = SuccessMessage | ErrorMessage

export interface IRedeemItem {
    post(url: string, token: string, productId: string): Promise<Result>
}

export class RedeemItem implements IRedeemItem {
    async post(url: string, token: string, productId: string) {
        let headers = authHeader(token)
        let method = "POST"
        let body = JSON.stringify({ productId })
        let res = await fetch(url, { headers, method, body })
        let data = await res.json()
        return data
    }
}