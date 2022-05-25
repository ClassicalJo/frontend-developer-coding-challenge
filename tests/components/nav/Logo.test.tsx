import Logo from "@nav/Logo";
import { render } from '@testing-library/react';

it("Should render a link to aerolab", () => {
    let component = render(<Logo />)
    expect(component.getByRole('button')).toHaveProperty('href', "https://aerolab.us/")
})
