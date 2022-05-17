import Explore from '@hero/Explore'
import { render } from '@testing-library/react'

it("Explore component should render the following text: EXPLORE THE", async () => {
    let component =  render(<Explore />)
    expect(component.container).toHaveTextContent("EXPLORE THE")
})