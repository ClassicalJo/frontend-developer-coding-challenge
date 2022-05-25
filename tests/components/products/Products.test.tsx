import Products from "@products/Products";
import { render, renderHook, waitFor } from "@testing-library/react";
import { useRef } from "react";
import { FAKE_PRODUCT_DATA, FAKE_USER_DATA } from "../../setupServer";
import userEvent from '@testing-library/user-event'
describe("Testing the container for the product grid", () => {
    let refreshUserData = jest.fn()
    let products = FAKE_PRODUCT_DATA
    let userData = FAKE_USER_DATA
    let errorToast = jest.fn()
    let successToast = jest.fn()
    let props = { refreshUserData, products, userData, errorToast, successToast }
    let user = userEvent.setup()
    it("Should render the title", () => {
        let ref = renderHook(() => useRef(null)).result.current
        let component = render(<Products {...props} productRef={ref} />)
        expect(component.container).toHaveTextContent("TECH")
        expect(component.container).toHaveTextContent("PRODUCTS")
    })
    it("Should render the filter", () => {
        let ref = renderHook(() => useRef(null)).result.current
        let component = render(<Products {...props} productRef={ref} />)
        let select = component.getByRole("combobox")
        expect(select).toBeInTheDocument()
    })
    it("Should render the sort buttons", () => {
        let ref = renderHook(() => useRef(null)).result.current
        let component = render(<Products {...props} productRef={ref} />)
        let button = component.getByRole("button", { name: "Most Recent" })
        expect(button).toBeInTheDocument()
    })
    it("Should render the Page selector", () => {
        let ref = renderHook(() => useRef(null)).result.current
        let component = render(<Products {...props} productRef={ref} />)
        let button = component.getByRole("button", { name: "Previous page" })
        expect(button).toBeInTheDocument()
    })
    it("Should render the products", () => {
        let ref = renderHook(() => useRef(null)).result.current
        let component = render(<Products {...props} productRef={ref} />)
        FAKE_PRODUCT_DATA.forEach(k => {
            expect(component.container).toHaveTextContent(k.name)
            expect(component.container).toHaveTextContent(k.category)
        })
    })
    it("On click, the product button should make an api call and create a success toast", async () => {
        let ref = renderHook(() => useRef(null)).result.current
        let component = render(<Products {...props} productRef={ref} />)
        let button = component.getByRole("button", { name: `Redeem for ${FAKE_PRODUCT_DATA[0].cost.toLocaleString()}` })
        await user.click(button)
        await waitFor(() => {expect(successToast).toBeCalled()})

    })
})