import { Dispatch } from "react";
import PageSelector from "../filter/PageSelector";
import { StyledNavigationBar, StyledNavigationPageSelector, StyledNavigationPageSelectorWrapper, StyledNavigationText, StyledNavigationTextSpan, StyledNavigationTextWrapper } from "./styles";

interface AppProps {
    showing: number;
    total: number;
    changePage: Dispatch<number>
    totalPages: number;
    currentPage: number;
    productsPerPage: number;

}
export default function NavigationBar({ showing, total, changePage, totalPages, currentPage, productsPerPage }: AppProps): JSX.Element {
    let products = showing + currentPage * productsPerPage
    return (
        <StyledNavigationBar>
            <StyledNavigationTextWrapper>
                <StyledNavigationText>
                    {`${products} of ${total} `}
                    <StyledNavigationTextSpan>products</StyledNavigationTextSpan>
                </StyledNavigationText>
            </StyledNavigationTextWrapper>
            <StyledNavigationPageSelectorWrapper>
                <StyledNavigationPageSelector changePage={changePage} currentPage={currentPage} totalPages={totalPages} />
            </StyledNavigationPageSelectorWrapper>
        </StyledNavigationBar>
    )
}