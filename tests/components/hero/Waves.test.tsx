import useWaves from '@hero/useWaves'
import Waves from '@hero/Waves'
import { act, render, renderHook } from '@testing-library/react'

describe("Waves component should cover a certain height according to the innerWidth", () => {

    it("If innerWidth is >= 1920px, total vertical area to cover should be around 1400px", () => {
        act(() => {
            global.innerWidth = 1920
            global.dispatchEvent(new Event('resize'))
        })
        let totalArea = renderHook(() => useWaves())
        expect(totalArea.result.current).toEqual(1400)
    })
    it("if innerWidth is between 1024 and 1919px, total area should be around 1050px", () => {
        act(() => {
            global.innerWidth = 1024
            global.dispatchEvent(new Event('resize'))
        })
        let totalArea = renderHook(() => useWaves())
        expect(totalArea.result.current).toEqual(1050)
    })
    it("if innerWidth is below 1024px, total Area should be around 950px", () => {
        act(() => {
            global.innerWidth = 1023
            global.dispatchEvent(new Event('resize'))
        })
        let totalArea = renderHook(() => useWaves())
        expect(totalArea.result.current).toEqual(950)
    })
})
