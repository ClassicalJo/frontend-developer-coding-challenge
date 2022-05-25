import useLogo from "@nav/useLogo";
import { act, renderHook } from "@testing-library/react";
import aerolabLogo1 from '../../../assets/icons/aerolab-logo-1.svg'
import aerolabLogo2 from '../../../assets/icons/aerolab-logo-2.svg'
describe("Testing resize hook for Logo", () => {
    it("Should provide a src", () => {
        let hook = renderHook(() => useLogo())
        expect(hook.result.current).toEqual(aerolabLogo1)
    })
    it("If innerWidth < 1920, should provide secondary logo", () => {
        let hook = renderHook(() => useLogo())
        act(() => { global.innerWidth = 1024 })
        expect(hook.result.current).toEqual(aerolabLogo2)
    })
})
