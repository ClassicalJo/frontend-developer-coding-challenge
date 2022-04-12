import { EffectUserData, Product } from "../types"

interface AppProps {
    product: Product
    userData: EffectUserData
}

export default function ProductElement({ product, userData }: AppProps) {
    let isDisabled = !userData || userData.points <= product.cost
    return (
        <div>
            <p>Name: {product.name}</p>
            <p>Cost: {product.cost}</p>
            <input type="button" value={"Redeem"} disabled={isDisabled} />
        </div>
    )
}