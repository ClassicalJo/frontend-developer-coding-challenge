import { render } from '@testing-library/react'
import Footer from '../../../components/footer'

describe("Testing the footer component", () => {
    it("Should render", () => {
        let component = render(<Footer />)
        expect(component.container).toHaveTextContent("View this repository")
    })
    it("Should redirect to this repository on github", () => {
        let component = render(<Footer />)
        let button = component.getByRole("button")
        expect(button).toHaveAttribute("href", "https://github.com/ClassicalJo/frontend-developer-coding-challenge")
    })
})