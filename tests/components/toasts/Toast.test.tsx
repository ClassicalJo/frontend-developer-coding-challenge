import { act, render } from '@testing-library/react'
import Toast from '@toasts/Toast'
import { ToastElement } from '@types'
import errorIcon from '../../../assets/icons/cross-active.svg'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'
describe("Testing individual toasts", () => {
    let user = userEvent.setup()
    const FAKE_ERROR_TOAST: ToastElement = {
        isError: true,
        item: "",
        message: "There was a problem with the element"
    }
    const FAKE_SUCCESS_TOAST: ToastElement = {
        isError: false,
        item: "Something",
        message: "was uploaded successfully"
    }
    let props = {
        toast: FAKE_ERROR_TOAST,
        show: true,
        first: true,
        icon: errorIcon,
        crossActive: errorIcon,
        crossDefault: errorIcon,
    }
    it("Should render the error text", () => {
        let errorComponent = render(<Toast {...props} />)
        expect(errorComponent.getByText(FAKE_ERROR_TOAST.message)).toBeTruthy()
    })
    it("Should render the success text", () => {
        let component = render(<Toast {...{ ...props, toast: FAKE_SUCCESS_TOAST }} />)
        expect(component.getByText(FAKE_SUCCESS_TOAST.item)).toHaveTextContent(FAKE_SUCCESS_TOAST.item)
        expect(component.getByText(FAKE_SUCCESS_TOAST.message)).toHaveTextContent(FAKE_SUCCESS_TOAST.message)
    })
    it("Should apply a particular style when the component is first", () => {
        let component = render(<Toast {...props} />)
        expect(component.container.firstChild).toMatchSnapshot()
    })
    it("Should apply a different style when component is not first", () => {
        let component = render(<Toast {...{ ...props, first: false }} />)
        expect(component.container.firstChild).toMatchSnapshot()
    })
    it("Should apply a different style when component is not shown", () => {
        let component = render(<Toast {...{ ...props, show: false }} />)
        expect(component.container.firstChild).toMatchSnapshot()
    })
    it("Should apply the success style when component is not an error", () => {
        let component = render(<Toast {...{ ...props, toast: FAKE_SUCCESS_TOAST }} />)
        expect(component.container.firstChild).toMatchSnapshot()
    })
    it("Should apply the error style when component is an error", () => {
        let component = render(<Toast {...props} />)
        expect(component.container.firstChild).toMatchSnapshot()
    })
    it("Should apply a different style when close button is clicked", async () => {
        let component = render(<Toast {...props} />)
        let button = component.getByRole("button")
        await user.click(button)
        expect(component.container.firstChild).toMatchSnapshot()
    })
})
