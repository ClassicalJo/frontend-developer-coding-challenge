import Card from "@browse/Card";
import cards from "@browse/cards";
import { act, render } from "@testing-library/react";

describe("Testing the card component", () => {
    let card = cards[0]
    it("Should render the card text", () => {
        let component = render(<Card {...card} />)
        expect(component.container).toHaveTextContent(card.title)
        expect(component.container).toHaveTextContent(card.subtitle)
    })
    it("If innerWidth < 1920, should render the abridged subtitle", () => {
        let component = render(<Card {...card} />)
        act(() => { global.innerWidth = 1050 })
        expect(component.container).toHaveTextContent(card.abridgedSubtitle)
    })
    it("Image should have the alt text", async () => {
        let component = render(<Card {...card} />)
        let image = component.getByAltText(card.alt)
        expect(image).toBeInTheDocument()

    })
})