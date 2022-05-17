import Tech from '@hero/Tech'
import { render } from '@testing-library/react'

it("Tech component should render the following text: TECH", async () => {
    let component =  render(<Tech />)
    expect(component.container).toHaveTextContent("TECH")
})