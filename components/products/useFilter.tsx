import React, { useState, useMemo, Dispatch } from "react";
import { Product } from "../types";
import sortAndFilterProducts from "../sortProducts";
import fetchRedeem from "../fetchRedeem";

import { SortMethod, FilterMethod } from '../types'

interface FilterProps {
    currentPage: number;
    setCurrentPage: Dispatch<number>;
    sortMethod: SortMethod;
    setSortMethod: Dispatch<SortMethod>;
    filterMethod: FilterMethod;
    setFilterMethod: Dispatch<FilterMethod>;
    products: Product[];
    startingIndex: number;
    endIndex: number;
    totalPages: number;
}
export default function useFilter(productsData: Product[]): FilterProps {
    let productsPerPage = 16
    let [currentPage, setCurrentPage] = useState<number>(0)
    let [sortMethod, setSortMethod] = useState<SortMethod>('recent')
    let [filterMethod, setFilterMethod] = useState<FilterMethod>('All products')
    let products = useMemo(() => sortAndFilterProducts(productsData, sortMethod, filterMethod), [productsData, sortMethod, filterMethod])
    let startingIndex = currentPage * productsPerPage
    let endIndex = startingIndex + productsPerPage
    let totalPages = Math.ceil(productsData.length / productsPerPage)
    return { currentPage, setCurrentPage, sortMethod, setSortMethod, filterMethod, setFilterMethod, products, startingIndex, endIndex, totalPages }
}