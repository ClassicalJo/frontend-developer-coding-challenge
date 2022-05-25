import Aerocard from "@nav/balance/Aerocard";
import { render } from "@testing-library/react";
import { FAKE_USER_DATA } from '../../../setupServer'
describe("Testing Aerocard component", () => {
    it("Should render text: Aerocard", () => {
        let component = render(<Aerocard userData={FAKE_USER_DATA} />)
        let date = new Date(FAKE_USER_DATA.createDate)
        expect(component.container).toHaveTextContent("Aerocard")
        expect(component.container).toHaveTextContent(FAKE_USER_DATA.name)
        expect(component.container).toHaveTextContent(FAKE_USER_DATA.name)
        expect(component.container).toHaveTextContent(`${date.getMonth()}/${date.getFullYear().toLocaleString().slice(2)}`)
    })
})