export default function authHeader(token: string): Headers {
    let headers = new Headers()
    headers.append("Content-Type", 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', 'Bearer ' + token)
    return headers
}