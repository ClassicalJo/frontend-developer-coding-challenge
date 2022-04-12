import { EffectUserData, Product } from "../types"

interface AppProps {
    product: Product
    userData: EffectUserData
    redeem: Function
}

export default function ProductElement({ product, userData, redeem }: AppProps) {
    let isDisabled = !userData || userData.points <= product.cost
    let redeemItem = () => redeem(product._id)
    return (
        <div>
            <p>Name: {product.name}</p>
            <p>Cost: {product.cost}</p>
            <input type="button" value={"Redeem"} disabled={isDisabled} onClick={redeemItem} />
        </div>
    )
}