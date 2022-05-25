import PageSelector from "@products/filter/PageSelector";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
class PageSelectorProps {
    currentPage: number;
    totalPages: number;
    changePage: (int: number) => void;
    constructor(initialPage: number, totalPages: number) {
        this.currentPage = initialPage
        this.totalPages = totalPages
        this.changePage = (int: number) => {
            this.currentPage += int
        }
    }

}
describe("Testing page selector component from the filter bar", () => {
    let user = userEvent.setup()
    it("Should render the current page (currentIndex +1)", () => {
        let props = new PageSelectorProps(0, 10)
        let component = render(<PageSelector {...props} />)
        expect(component.container).toHaveTextContent(`Page ${props.currentPage + 1}`)
        expect(component.container).toHaveTextContent(`of ${props.totalPages}`)
    })
    it("On currentPage 0, pageDown should be disabled", () => {
        let props = new PageSelectorProps(0, 10)
        let component = render(<PageSelector {...props} />)
        let buttonLeft = component.getByRole('button', { name: "Previous page" })
        expect(buttonLeft).toHaveAttribute("disabled")
    })
    it("on currentPage > 0, pageDown should be enabled", () => {
        let props = new PageSelectorProps(1, 10)
        let component = render(<PageSelector {...props} />)
        let buttonLeft = component.getByRole('button', { name: "Previous page" })
        expect(buttonLeft).not.toHaveAttribute("disabled")
    })
    it("on currentPage >= totalPages, pageUp should be disabled", () => {
        let props = new PageSelectorProps(10, 10)
        let component = render(<PageSelector {...props} />)
        let buttonLeft = component.getByRole('button', { name: "Next page" })
        expect(buttonLeft).toHaveAttribute("disabled")
    })
    it("on currentPage < totalPages, pageUp should be disabled", () => {
        let props = new PageSelectorProps(1, 10)
        let component = render(<PageSelector {...props} />)
        let buttonLeft = component.getByRole('button', { name: "Next page" })
        expect(buttonLeft).not.toHaveAttribute("disabled")
    })
    it("Clicking on next page should render the correct current page +1", async () => {
        let initialPage = 0
        let props = new PageSelectorProps(initialPage, 10)
        let component = render(<PageSelector {...props} />)
        let buttonRight = component.getByRole('button', { name: "Next page" })
        await user.click(buttonRight)
        component.rerender(<PageSelector {...props} />)
        expect(component.container).toHaveTextContent(`Page ${initialPage + 2}`)
    })
    it("Clicking on previous page should render the correct current page +1", async () => {
        let initialPage = 2
        let props = new PageSelectorProps(initialPage, 10)
        let component = render(<PageSelector {...props} />)
        let buttonLeft = component.getByRole('button', { name: "Previous page" })
        await user.click(buttonLeft)
        component.rerender(<PageSelector {...props} />)
        expect(component.container).toHaveTextContent(`Page ${initialPage}`)
    })
})