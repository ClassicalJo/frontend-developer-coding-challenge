import authHeader from "../authHeader"
import { Result } from "../types";
type ServerResponse = { message: string }

export interface IRedeemItem {
    post(url: string, token: string, productId: string): Promise<Result<ServerResponse>>
}

export class RedeemItem implements IRedeemItem {
    async post(url: string, token: string, productId: string): Promise<Result<ServerResponse>> {
        let headers = authHeader(token)
        let method = "POST"
        let body = JSON.stringify({ productId })
        try {
            let res = await fetch(url, { headers, method, body })
            if (res.status !== 200) throw new Error("Server responded with error status " + res.status)
            let data = await res.json()
            return data
        }
        catch (error) {
            if (error instanceof Error) throw error
            else throw new Error("There was an error while redeeming the item.")
        }
    }
}