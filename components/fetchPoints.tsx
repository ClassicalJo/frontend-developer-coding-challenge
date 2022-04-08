import { ValidCharge } from "./types"

export default async function fetchPoints(url: string, method: string, amount: ValidCharge, token: string) {
    let headers = new Headers()
    headers.append("Content-Type", 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', 'Bearer ' + token)
    let body = JSON.stringify({ amount })
    try {
        const res = await fetch(url, { headers, method, body })
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log('handle error', err)
    }
}