import FilterBar from "@products/filter";
import useFilter from "@products/useFilter";
import { fireEvent, render, renderHook } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import sortAndFilterProducts from "../../../../components/sortProducts";
import { FAKE_PRODUCT_DATA } from "../../../setupServer";

describe("Testing filter bar component", () => {
    let user = userEvent.setup()
    it("Should render the filter buttons and the page selector", () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        let component = render(<FilterBar {...hook.result.current} />)
        expect(component.container).toHaveTextContent("Most Recent")
        expect(component.container).toHaveTextContent("Lowest Price")
        expect(component.container).toHaveTextContent("Highest Price")
        expect(component.container).toHaveTextContent("Page 1")
    })
    it("Clicking the select bar should show the drop down menu with the filter options", async () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        let component = render(<FilterBar {...hook.result.current} />)
        let select = component.getByRole("combobox")
        await user.click(select)
        expect(component.container).toHaveTextContent("All products")
        expect(component.container).toHaveTextContent("Monitors & TV")
        expect(component.container).toHaveTextContent("Gaming")
    })
    it("Clicking the select bar then an option should filter the products", async () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        let component = render(<FilterBar {...hook.result.current} />)
        let select = component.getByRole("combobox")
        await user.click(select)
        let option = component.getByText("Gaming")
        fireEvent.change(select, { target: { value: option.getAttribute('value') } })
        expect(hook.result.current.filterMethod).toEqual("Gaming")
    })
    it("Clicking a sorting button should reorder the products", async () => {
        let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
        let component = render(<FilterBar {...hook.result.current} />)
        let button = component.getByRole("button", { name: "Highest Price" })
        await user.click(button)
        expect(hook.result.current.products)
            .toEqual(sortAndFilterProducts(FAKE_PRODUCT_DATA, "highest-price", "All products"))
    })
})