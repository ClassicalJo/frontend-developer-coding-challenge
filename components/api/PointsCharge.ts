import { ValidCharge } from "../types";
type SuccessMessage = { success: string }
type ErrorMessage = { err: string }
type Result = SuccessMessage | ErrorMessage

export interface IPointsCharge {
    chargePoints(url: string, amount: ValidCharge, token: string): Promise<Result>
}

export class PointsCharge implements IPointsCharge {
    async chargePoints(url: string, amount: ValidCharge, token: string): Promise<Result> {
        let headers = new Headers()
        headers.append("Content-Type", 'application/json')
        headers.append('Accept', 'application/json')
        headers.append('Authorization', 'Bearer ' + token)
        let body = JSON.stringify({ amount })
        let method = "POST"
        try {
            const res = await fetch(url, { headers, method, body })
            const data = await res.json()
            return data
        }
        catch (err: any) {
            let error = new Error("Error during point charging.")
            return { err: error.message }
        }
    }
}