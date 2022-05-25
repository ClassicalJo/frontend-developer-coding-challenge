import SelectionButton from "@products/filter/SelectionButton";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { SortMethod } from "@types";

describe("Testing component to select order method in filter", () => {
    interface AppProps {
        onClick: () => void;
        method: SortMethod;
        text: string;
        current: SortMethod;
    }
    let props: AppProps = {
        onClick: jest.fn(),
        method: 'recent',
        text: "Most recent",
        current: "lowest-price"
    }
    let user = userEvent.setup()
    it("Should render the method", () => {
        let component = render(<SelectionButton {...props} />)
        expect(component.container).toHaveTextContent(props.text)
    })
    it("onClick should call the onClick handler with the method prop", async () => {
        let component = render(<SelectionButton {...props} />)
        let button = component.getByRole("button")
        await user.click(button)
        expect(props.onClick).toBeCalledWith(props.method)

    })
})