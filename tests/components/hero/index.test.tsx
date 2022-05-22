import Hero from '@hero/index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("Testing hero component", () => {
    let user = userEvent.setup()
    let handleClick = jest.fn()



    it("should render text: EXPLORE THE", () => {
        let component = render(<Hero onClick={handleClick} />)
        let explore = component.getAllByText("EXPLORE THE")
        expect(explore).toBeTruthy()
    })
    it("should render text: TECH", () => {
        let component = render(<Hero onClick={handleClick} />)
        let tech = component.getAllByText("TECH")
        expect(tech).toBeTruthy()
    })
    it("should render text: ZONE", () => {
        let component = render(<Hero onClick={handleClick} />)
        let zone = component.getAllByText("ZONE")
        expect(zone).toBeTruthy()
    })
    it("should render text: Here you'll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.", () => {
        let component = render(<Hero onClick={handleClick} />)
        let subtitle = component.getAllByText("Here you'll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech.")
        expect(subtitle).toBeTruthy()
    })
    it("should render button: VIEW ALL PRODUCTS", () => {
        let component = render(<Hero onClick={handleClick} />)
        expect(component.getByRole('button'))
            .toHaveTextContent("VIEW ALL PRODUCTS")
    })
    it("the component receives a prop to handle the click on the button.", async () => {
        let component = render(<Hero onClick={handleClick} />)
        let button = component.getByRole('button')
        await user.click(button)
        expect(handleClick).toBeCalled()
    })
})

