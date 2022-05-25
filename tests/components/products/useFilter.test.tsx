import useFilter from "@products/useFilter";
import { act, fireEvent, renderHook, waitFor } from "@testing-library/react";
import { Product } from "@types";
import { FAKE_PRODUCT_DATA } from "../../setupServer";
describe("Utility to sort and filter productData arrays", () => {
    it("At first, it shouldn't filter and it should sort by the most recently added", () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        expect(hook.result.current.products).toEqual(FAKE_PRODUCT_DATA
            .sort((a: Product, b: Product): number => parseInt(a._id, 16) - parseInt(b._id, 16)))
    })
    it("Then, if provided a different sort method is set, should sort it by that method", () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        act(() => hook.result.current.setSortMethod("highest-price"))
        expect(hook.result.current.products).toEqual(FAKE_PRODUCT_DATA
            .sort((a: Product, b: Product): number => a.cost - b.cost))
    })
    it("Then, if provided a different filter method, should filter by that category", () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        act(() => hook.result.current.setFilterMethod("Audio"))
        expect(hook.result.current.products.length).toBeLessThan(FAKE_PRODUCT_DATA.length)
    })
    it("If innerWidth >= 1920, products per page should be 16", () => {
        act(() => { global.innerWidth = 1920 })
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        expect(hook.result.current.productsPerPage).toEqual(16)
    })
    it("If innerWidth < 1920 and >= 1024, products per page should be 12", () => {
        act(() => { global.innerWidth = 1024 })
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        expect(hook.result.current.productsPerPage).toEqual(12)
    })
    it("If innerWidth < 1024, products per page should be 8", () => {
        act(() => { global.innerWidth = 1023 })
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        expect(hook.result.current.productsPerPage).toEqual(8)
    })
    it("On a resize event, currentPage should return to 0", async () => {
        act(() => { global.innerWidth = 1920 })
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        act(() => hook.result.current.setCurrentPage(1))
        act(() => {
            global.innerWidth = 720
            fireEvent(window, new Event('resize'))
        })
        await waitFor(() => {expect(hook.result.current.currentPage).toEqual(0)})
    })
})