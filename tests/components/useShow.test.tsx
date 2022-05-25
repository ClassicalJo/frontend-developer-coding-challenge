import { act, renderHook } from "@testing-library/react";
import useShow from "../../components/useShow";

describe("Testing utility to animate only after the first render", () => {
    let time = 500
    it("After a toggle, first render should be false", () => {
        let hook = renderHook(() => useShow(time))
        act(() => { hook.result.current.toggle() })
        expect(hook.result.current.firstRender).toEqual(false)
    })
    it("After the first toggle, show should be true", () => {
        let hook = renderHook(() => useShow(time))
        act(() => { hook.result.current.toggle() })
        expect(hook.result.current.show).toEqual(true)
    })
    it("After two toggles, it should be showing while hiding", () => {
        jest.useFakeTimers()
        let hook = renderHook(() => useShow(time))
        act(() => { hook.result.current.toggle() })
        act(() => { hook.result.current.toggle() })
        expect(hook.result.current.show).toEqual(true)
        expect(hook.result.current.hide).toEqual(true)
    })
    it("After three immediate toggles, it should be the same as two toggles", () => {
        jest.useFakeTimers()
        let hook = renderHook(() => useShow(time))
        act(() => { hook.result.current.toggle() })
        act(() => { hook.result.current.toggle() })
        act(() => { hook.result.current.toggle() })
        expect(hook.result.current.show).toEqual(true)
        expect(hook.result.current.hide).toEqual(true)
    })
    it("After two toggles, if the time has passed, should be not showing nor hiding", () => {
        jest.useFakeTimers()
        let hook = renderHook(() => useShow(time))
        act(() => { hook.result.current.toggle() })
        act(() => { hook.result.current.toggle() })
        act(() => { jest.runAllTimers() })
        expect(hook.result.current.show).toEqual(false)
        expect(hook.result.current.hide).toEqual(false)
    })
    it("After two toggles, if the time has passed, another toggle should be possible, with show being true", () => {
        jest.useFakeTimers()
        let hook = renderHook(() => useShow(time))
        act(() => { hook.result.current.toggle() })
        act(() => { hook.result.current.toggle() })
        act(() => { jest.runAllTimers() })
        act(() => { hook.result.current.toggle() })
        expect(hook.result.current.show).toEqual(true)
        
    })
})