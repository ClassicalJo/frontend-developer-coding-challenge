import Browse from "@browse/index";
import cards from "@browse/cards";
import { render } from "@testing-library/react";

describe("Testing the Browse container", () => {
    it("Should render all three cards", () => {
        let component = render(<Browse />)
        for (let i = 0; i < cards.length; i++) {
            expect(component.container).toHaveTextContent(cards[i].title)
        }
    })
})