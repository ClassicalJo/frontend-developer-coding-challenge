import { Product } from "../types"

interface AppProps {
    product: Product
    className?: string
}
export default function ProductCard({ className, product }: AppProps): JSX.Element {
    return <div className={className}>{product.name}</div>
}