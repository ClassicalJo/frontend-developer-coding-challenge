import React, { useState, useMemo, Dispatch, useEffect } from "react";
import { Product } from "../types";
import sortAndFilterProducts from "../sortProducts";
import fetchRedeem from "../fetchRedeem";

import { SortMethod, FilterMethod } from '../types'

interface FilterProps {
    currentPage: number;
    setCurrentPage: Dispatch<number>;
    changePage: Dispatch<number>;
    sortMethod: SortMethod;
    setSortMethod: Dispatch<SortMethod>;
    filterMethod: FilterMethod;
    setFilterMethod: Dispatch<FilterMethod>;
    products: Product[];
    startingIndex: number;
    endIndex: number;
    totalPages: number;
    productsPerPage: number;
}
export default function useFilter(productsData: Product[]): FilterProps {
    let [productsPerPage, setProductsPerPage] = useState<number>(16)
    let [currentPage, setCurrentPage] = useState<number>(0)
    let [sortMethod, setSortMethod] = useState<SortMethod>('recent')
    let [filterMethod, setFilterMethod] = useState<FilterMethod>('All products')
    let products = useMemo(() => sortAndFilterProducts(productsData, sortMethod, filterMethod), [productsData, sortMethod, filterMethod])
    let startingIndex = currentPage * productsPerPage
    let endIndex = startingIndex + productsPerPage
    let totalPages = Math.ceil(products.length / productsPerPage)
    let changePage = (int: number) => currentPage + int >= 0 && currentPage + int < totalPages && setCurrentPage(currentPage + int)
    useEffect(() => {
        function checkResize(int: number) {
            if (productsPerPage === int) return
            setProductsPerPage(int)
            setCurrentPage(0)
        }
        function resize() {
            if (window.innerWidth >= 1920) checkResize(16)
            else if (window.innerWidth >= 1024) checkResize(12)
            else checkResize(8)
        }
        resize()
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [productsPerPage])
    return { 
        currentPage, 
        setCurrentPage, 
        changePage, 
        sortMethod, 
        setSortMethod, 
        filterMethod, 
        setFilterMethod, 
        products, 
        startingIndex, 
        endIndex, 
        totalPages,
        productsPerPage
    }
}