import { ValidCharge } from "./types";

export default function fetchPoints(amount: ValidCharge) {
    return fetch('api/user', { method: "POST", body: JSON.stringify({ amount }) })
}