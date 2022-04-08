import { useMemo, useState } from "react"
import sortAndFilterProducts from "../sortProducts"
import { FilterMethod, ProductsData, SortMethod } from "../types"

type AppProps = {
    productsData: ProductsData
}

const ProductList = ({ productsData }: AppProps): JSX.Element => {
    let productsPerPage = 16
    let [currentPage, setCurrentPage] = useState<number>(0)
    let [sortMethod, setSortMethod] = useState<SortMethod>('recent')
    let [filterMethod, setFilterMethod] = useState<FilterMethod>('all')
    let products = useMemo(() => sortAndFilterProducts(productsData, sortMethod, filterMethod), [sortMethod, filterMethod])
    let startingIndex = currentPage * productsPerPage
    let endIndex = startingIndex + productsPerPage
    return (
        <div>
            <input type='button' onClick={() => setCurrentPage(currentPage - 1)} defaultValue="-"/>
            <p>Current Page: {currentPage + 1}</p>
            <input type='button' onClick={() => setCurrentPage(currentPage + 1)} defaultValue="+"/>
            <input type='button' onClick={() => setSortMethod('recent')} value="Recent"/>
            <input type='button' onClick={() => setSortMethod('highest-price')} value="Highest Price"/>
            <input type='button' onClick={() => setSortMethod('lowest-price')} value="Lowest Price"/>
            <select
                value={filterMethod}
                name="filter-method"
                id="filter-method"
                onChange={e => setFilterMethod(e.target.value as FilterMethod)}
            >
                <option value="all">All</option>
                <option value="Gaming">Gaming</option>
                <option value="Audio">Audio</option>
                <option value="Smart Home">Smart Home</option>
                <option value="Monitors & TV">Monitors & TV</option>
            </select>
            {products.slice(startingIndex, endIndex).map((k, index) => <div key={`product${index}`}> {k.name}</div>)}
        </div>
    )
}

export default ProductList