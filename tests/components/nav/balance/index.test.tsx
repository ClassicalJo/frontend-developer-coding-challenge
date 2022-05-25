import Balance from "@nav/balance";
import { render, waitFor } from "@testing-library/react";
import { FAKE_USER_DATA } from "../../../setupServer";
import userEvent from '@testing-library/user-event'
describe("Testing the button that shows userPoints and opens the userCard", () => {
    let props = {
        userData: FAKE_USER_DATA,
        errorToast: jest.fn(),
        successToast: jest.fn(),
        refreshUserData: jest.fn(),
    }
    it("Should show user points", () => {
        let component = render(<Balance {...props} />)
        expect(component.container).toHaveTextContent(FAKE_USER_DATA.points.toLocaleString())
    })
    it("On click, it should show the user card", async () => {
        let user = userEvent.setup()
        let component = render(<Balance {...props} />)
        let button = component.getByRole("button")
        await user.click(button)
        await waitFor(() => {
            expect(component.container).toHaveTextContent("Aerocard")
        })
    })
})