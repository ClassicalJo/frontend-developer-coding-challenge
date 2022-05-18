import Waves from '@hero/Waves'
import { act, render, screen, within } from '@testing-library/react'
describe("Waves inline svg", () => {
    it("When innerWidth is >= 1920, it should contain about 90 waves", () => {
        let component = render(<Waves />)
        let { getByTestId } = within(component.container)
        act(() => {
            global.innerWidth = 1920
            global.dispatchEvent(new Event('resize'))
        })
        expect(getByTestId("wave-container").children.length).toBeGreaterThan(90)
    })
    it("When innerWidth is >= 1024, it should contain about 65 waves", () => {
        let component = render(<Waves />)
        let { getByTestId } = within(component.container)
        act(() => {
            global.innerWidth = 1024
            global.dispatchEvent(new Event('resize'))
        })
        expect(getByTestId("wave-container").children.length).toBeGreaterThan(65)
        expect(getByTestId("wave-container").children.length).toBeLessThanOrEqual(90)
    })
    it("When innerWidth is < 1024, it should contain less than 65 waves", () => {
        let component = render(<Waves />)
        let { getByTestId } = within(component.container)
        act(() => {
            global.innerWidth = 1023
            global.dispatchEvent(new Event('resize'))
        })
        
        expect(getByTestId("wave-container").children.length).toBeLessThan(65)
    })
})