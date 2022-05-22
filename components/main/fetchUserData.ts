import { UserData } from "@types";
import { Dispatch } from "react";

export default async function fetchUserData(setter: Dispatch<UserData>, errorHandler: (err: unknown) => void) {
    try {
        let res = await fetch("api/user")
        let data = await res.json()
        if (data.error) throw new Error(data.error)
        setter(data)
    } catch (err) {
        errorHandler(err)
    }
}