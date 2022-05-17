import Subtitle from '@hero/Subtitle'
import { render } from '@testing-library/react'

const text = "Here you'll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech."
it("Subtitle component should render the following text: " + text, async () => {
    let component =  render(<Subtitle />)
    expect(component.container).toHaveTextContent(text)
})
