import { fireEvent, render } from "@testing-library/react";
import keyDown from "../../components/keyDown";
describe("Testing a HOC that returns a way to simplify keydownevents", () => {
    it("Given a function, should call it when keyboard press Enter", () => {
        let mock = jest.fn()
        let onKeyDownHandler = keyDown(mock)
        let component = render(<div role='button' onKeyDown={onKeyDownHandler} />)
        fireEvent.keyDown(component.getByRole("button"), { key: "Enter", code: "Enter", charCode: 13 })
        expect(mock).toBeCalled()
    })
    it("Should not call it when any other key is pressed", () => {
        let mock = jest.fn()
        let onKeyDownHandler = keyDown(mock)
        let component = render(<div role='button' onKeyDown={onKeyDownHandler} />)
        fireEvent.keyDown(component.getByRole("button"), { key: "a", code: "KeyA", charCode: 65 })
        expect(mock).not.toBeCalled()
    })    
})
