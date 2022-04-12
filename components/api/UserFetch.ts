import fetchData from "../fetchData"
import { FetchData } from "../types"

export interface IUserFetch {
    get(url: string, token: string): Promise<FetchData>
}

export class UserFetch implements IUserFetch {
    get(url: string, token: string) {
        return fetchData(url, 'GET', token)
    }
}