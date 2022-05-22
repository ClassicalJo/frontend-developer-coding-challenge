import authHeader from "../authHeader"
import { Result, UserData } from "../types"

export interface IUserFetch {
    get(url: string, token: string): Promise<Result<UserData>>
}

export class UserFetch implements IUserFetch {
    async get(url: string, token: string) {
        let headers = authHeader(token)
        try {
            const response = await fetch(url, { headers })
            const data = await response.json()
            if (response.status === 200) return data
            else throw Error("Server responded with error status " + response.status)
        }
        catch (error) {
            if (error instanceof Error) throw error
            else throw new Error("There was an error while retrieving the user data.")
        }
    }
}