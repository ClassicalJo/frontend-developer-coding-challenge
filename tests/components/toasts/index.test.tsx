import { act, render, renderHook } from "@testing-library/react"
import Toasts from "@toasts/index"
import useToasts from "@toasts/useToasts"

describe("Testing toasts containers", () => {
    it("When errorToast is called, should render an errorToast", () => {
        let hook = renderHook(() => useToasts())
        let { errorToast } = hook.result.current
        act(() => {
            errorToast()
        })
        let component = render(<Toasts toasts={hook.result.current.toasts} hide={hook.result.current.hide} />)
        expect(component.container).toHaveTextContent("There was a problem with the transaction")
    })
    it("When successToast is called, should render a successful Toast", () => {
        let hook = renderHook(() => useToasts())
        let { successToast } = hook.result.current
        act(() => {
            successToast("Xpro")
        })
        let component = render(<Toasts toasts={hook.result.current.toasts} hide={hook.result.current.hide} />)
        expect(component.container).toHaveTextContent("Xpro")
        expect(component.container).toHaveTextContent("was redeemed successfully")
    })
    it("When errorHandler is called, should render an error toast", () => {
        let error = new Error("There was an error")
        let hook = renderHook(() => useToasts())
        let { handleErrorWithToast } = hook.result.current
        act(() => {
            handleErrorWithToast(error)
        })
        let component = render(<Toasts toasts={hook.result.current.toasts} hide={hook.result.current.hide} />)
        expect(component.container).toHaveTextContent("There was an error")
    })
    it("When customToast is called, should render a custom toast", () => {
        let hook = renderHook(() => useToasts())
        let { customToast } = hook.result.current
        act(() => {
            customToast(false, "Something went wrong")
        })
        let component = render(<Toasts toasts={hook.result.current.toasts} hide={hook.result.current.hide} />)
        expect(component.container).toHaveTextContent("Something went wrong")
    })

})