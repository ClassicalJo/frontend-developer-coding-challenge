export default async function fetchData(url: string, method: string, token: string) {
    let headers = new Headers()
    headers.append("Content-Type", 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Authorization', 'Bearer ' + token)
    try {
        const res = await fetch(url, { headers, method })
        const data = await res.json()
        return data
    }
    catch (err) {
        console.log(err)
    }
}