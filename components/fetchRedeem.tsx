export default function fetchRedeem(productId: string) {
    return fetch('api/redeem', { method: "POST", body: JSON.stringify({ productId }) })
}
