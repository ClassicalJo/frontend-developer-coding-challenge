import { FilterMethod, Product, ProductsData, SortMethod } from "./types";

export default function sortAndFilterProducts(products: ProductsData, sort: SortMethod, filter: FilterMethod): ProductsData {
    return filterProducts(products, filter).sort(sortProducts(sort))
}

function filterProducts(products: ProductsData, filterMethod: FilterMethod): ProductsData {
    if (filterMethod === 'all') return products
    return products.filter(k => k.category === filterMethod)
}
function sortProducts(sort: SortMethod) {
    switch (sort) {
        case 'lowest-price': return (a: Product, b: Product): number => a.cost - b.cost
        case 'highest-price': return (a: Product, b: Product): number => b.cost - a.cost
        default: return (a: Product, b: Product): number => parseInt(a._id, 16) - parseInt(b._id, 16)
    }
}