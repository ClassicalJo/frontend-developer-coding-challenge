import { act, renderHook } from "@testing-library/react"
import useToasts from "@toasts/useToasts"

describe("Testing the useToasts hook", () => {
    it("When emitting a success toast, toast array should update", async () => {
        let { result } = renderHook(() => useToasts())
        let item = "an item"
        let { successToast } = result.current
        act(() => {
            successToast(item)
        })
        expect(result.current.toasts[0].item).toEqual(item)
    })

    it("When emitting an error toast, toast array should update", () => {
        let { result } = renderHook(() => useToasts())
        let { errorToast } = result.current
        act(() => {
            errorToast()
        })
        expect(result.current.toasts[0].message).toEqual("There was a problem with the transaction")
    })

    it("When handling an Error with toast, toast array should update", () => {
        let { result } = renderHook(() => useToasts())
        let { handleErrorWithToast } = result.current
        act(() => {
            handleErrorWithToast(new Error("Something went wrong"))
        })
        expect(result.current.toasts[0].message).toEqual("Something went wrong")
    })
    it("After 6 seconds of inactivity, it should hide", () => {
        jest.useFakeTimers()
        let { result } = renderHook(() => useToasts())
        let { errorToast } = result.current
        act(() => {
            errorToast()
            jest.runAllTimers()
        })

        expect(result.current.hide).toEqual(true)
    })
})