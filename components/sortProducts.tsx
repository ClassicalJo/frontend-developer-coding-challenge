import { FilterMethod, Product, ProductsData, SortMethod } from "./types";

export default function sortAndFilterProducts(products: Product[], sort: SortMethod, filter: FilterMethod): Product[] {
    return filterProducts(products, filter).sort(sortProducts(sort))
}

function filterProducts(products: Product[], filterMethod: FilterMethod): Product[] {
    if (filterMethod === 'All products') return products
    return products.filter(k => k.category === filterMethod)
}
function sortProducts(sort: SortMethod) {
    switch (sort) {
        case 'lowest-price': return (a: Product, b: Product): number => a.cost - b.cost
        case 'highest-price': return (a: Product, b: Product): number => b.cost - a.cost
        default: return (a: Product, b: Product): number => parseInt(a._id, 16) - parseInt(b._id, 16)
    }
}