import scrollToElement from '@main/scrollToElement'
import { render } from '@testing-library/react'
describe("Scroll to component", () => {
    it("Given a component, it should scroll to target component", () => {
        let component = render(
            <div>
                <div style={{ height: 1000, width: 1000 }} >ElementA</div>
                <div data-testid="target" >Element B</div>
            </div>
        )
        jest.spyOn(window, 'scrollTo').mockImplementation(() => jest.fn())
        let target = component.getByTestId('target')
        scrollToElement(target as HTMLDivElement)
        expect(window.scrollTo).toBeCalledWith({ behavior: "smooth", top: target.offsetTop })
    })
})