import { NextApiRequest, NextApiResponse } from "next"
import { IUserFetch } from "./UserFetch"

export class UserHandler {
    url: string
    token: string
    fetchUser: IUserFetch
    constructor(url: string, token: string, fetchUser: IUserFetch) {
        this.url = url
        this.token = token
        this.fetchUser = fetchUser
    }
    handleFetchUser(req: NextApiRequest, res: NextApiResponse) {
        return new Promise<void>(resolve => {
            this.fetchUser.get(this.url, this.token)
                .then(data => res.json(data))
                .catch(err => res.json({ error: err }))
                .finally(resolve)
        })
    }
}