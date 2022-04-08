import { ProductsData } from "../types"

type AppProps = {
    productsData: ProductsData
}

const ProductList = ({ productsData }: AppProps): JSX.Element => {
    return (
        <div>
            {productsData.map((k, index) => <div key={`product${index}`}> {k.name}</div>)}
        </div>
    )
}

export default ProductList