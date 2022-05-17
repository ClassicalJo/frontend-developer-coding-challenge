import Zone from '@hero/Zone'
import { render } from '@testing-library/react'

it("Tech component should render the following text: ZONE", async () => {
    let component =  render(<Zone />)
    expect(component.container).toHaveTextContent("ZONE")
})