import NavigationBar from "@products/navigation";
import useFilter from "@products/useFilter";
import { render, renderHook } from "@testing-library/react";
import { FAKE_PRODUCT_DATA } from "../../../setupServer";

it("Should show how many products are being shown", () => {
    let showing = FAKE_PRODUCT_DATA.length
    let total = FAKE_PRODUCT_DATA.length
    let hook = renderHook(() => useFilter(FAKE_PRODUCT_DATA))
    let component = render(<NavigationBar
        {...hook.result.current}
        showing={showing}
        total={total} />)
    expect(component.container).toHaveTextContent(`${showing} of ${total}`)
})