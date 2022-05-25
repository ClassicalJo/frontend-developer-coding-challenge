import ProductCard from "@products/card";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { FAKE_PRODUCT_DATA, FAKE_USER_DATA } from '../../../setupServer'
describe("Testing individual product card", () => {
    let mock = jest.fn()
    let redeem = () => new Promise<void>((resolve, reject) => {
        mock()
        resolve(this)
    })
    let user = userEvent.setup()
    let component = render(<ProductCard product={FAKE_PRODUCT_DATA[0]} userData={FAKE_USER_DATA} redeem={redeem} />)
    it("Should render the product text and category", () => {
        expect(component.container).toHaveTextContent(FAKE_PRODUCT_DATA[0].name)
        expect(component.container).toHaveTextContent(FAKE_PRODUCT_DATA[0].category)
    })
    it("On click, it should try to redeem the item and change its status to processing", async () => {
        let component = render(<ProductCard product={FAKE_PRODUCT_DATA[0]} userData={FAKE_USER_DATA} redeem={redeem} />)
        let button = component.getByRole("button")
        await user.click(button)
        expect(mock).toBeCalled()

    })
    it("On click, button text should be processing", async () => {
        let redeem = () => new Promise<void>((resolve, reject) => { mock() })
        let component = render(<ProductCard product={FAKE_PRODUCT_DATA[0]} userData={FAKE_USER_DATA} redeem={redeem} />)
        let button = component.getByRole("button")
        await user.click(button)
        expect(component.container).toHaveTextContent("Processing")
    })
    it("If available points arent enough, unavailable button should render instead", async () => {
        let component = render(
            <ProductCard
                product={FAKE_PRODUCT_DATA[0]}
                userData={{ ...FAKE_USER_DATA, points: 0 }}
                redeem={redeem}
            />)
        let button = component.queryByRole("button")
        expect(button).toBeNull()
        expect(component.container).toHaveTextContent("You need")
    })
})