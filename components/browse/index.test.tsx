import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import "jest-styled-components";
import Browse from './index'
import cards from './cards'

test('it works', () => {
    const { container } = render(<Browse />)
    expect(container.firstChild).toMatchSnapshot()
  })