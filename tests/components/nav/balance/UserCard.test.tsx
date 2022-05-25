import UserCard from "@nav/balance/UserCard";
import { act, render, waitFor } from "@testing-library/react";
import { ValidCharge } from "@types";
import { FAKE_USER_DATA } from "../../../setupServer";
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

describe("Testing the UserCard component", () => {
    let props = {
        hide: false,
        userData: FAKE_USER_DATA,
        refreshUserData: jest.fn(),
        successToast: jest.fn(),
        errorToast: jest.fn(),
    }
    it("Should render: Add balance", () => {
        let component = render(<UserCard {...props} />)
        expect(component.container).toHaveTextContent("Add Balance")
    })
    it("Should render Aerocard component", () => {
        let component = render(<UserCard {...props} />)
        expect(component.container).toHaveTextContent("Aerocard")
    })
    it("Should render three charge option buttons", () => {
        let component = render(<UserCard {...props} />)
        let validCharges: ValidCharge[] = [1000, 5000, 7500]
        validCharges.forEach(k => {
            let button = component.getByRole('button', { name: k.toString() })
            expect(button).toBeInTheDocument()
        })
    })
    it("Should render a redeem button", () => {
        let component = render(<UserCard {...props} />)
        let button = component.getByRole('button', { name: "Add Points" })
        expect(button).toBeInTheDocument()
    })
    it("Clicking the redeem button should change it to processing", async () => {
        let component = render(<UserCard {...props} />)
        let button = component.getByRole('button', { name: "Add Points" })
        let user = userEvent.setup()
        await user.click(button)
        expect(component.container).toHaveTextContent("Processing...")
    })
    it("Clicking the add points button should make an api call and generate a toast", async () => {
        let component = render(<UserCard {...props} />)
        let button = component.getByRole('button', { name: "Add Points" })
        let user = userEvent.setup()
        await user.click(button)
        expect(props.successToast).toBeCalledWith("1000 Aeropoints package")
    })
    it("Clicking a charge button then the Add Points button should make a toast for the points", async () => {
        let component = render(<UserCard {...props} />)
        let amount: ValidCharge = 7500
        let user = userEvent.setup()

        let chargeButton = component.getByRole('button', { name: amount.toString() })
        await user.click(chargeButton)
        let redeemButton = component.getByRole('button', { name: "Add Points" })
        await user.click(redeemButton)
        await waitFor(() => {
            expect(props.successToast).toBeCalledWith(amount + " Aeropoints package")
        })
    })
    it("Clicking a charge button different from the currently selected should change its style", async () => {
        let component = render(<UserCard {...props} />)
        let amount: ValidCharge = 5000
        let user = userEvent.setup()
        let chargeButton = component.getByRole('button', { name: amount.toString() })
        await user.click(chargeButton)
        expect(chargeButton).toMatchSnapshot()
    })

})