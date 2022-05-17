import authHeader from "../authHeader";
import { ValidCharge, Result } from "../types";
type ServerResponse = { amount: number }

export interface IPointsCharge {
    post(url: string, amount: ValidCharge, token: string): Promise<Result<ServerResponse>>
}

export class PointsCharge implements IPointsCharge {
    async post(url: string, amount: ValidCharge, token: string): Promise<Result<ServerResponse>> {
        let headers = authHeader(token)
        let body = JSON.stringify({ amount })
        let method = "POST"
        try {
            const response = await fetch(url, { headers, method, body })
            const data = await response.json()
            if (response.status === 200) return data
            else throw Error("Server responded with error status " + response.status)
        }
        catch (error) {
            throw error
        }
    }
}