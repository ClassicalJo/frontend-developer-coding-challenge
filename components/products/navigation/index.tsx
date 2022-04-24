import { Dispatch } from "react";
import PageSelector from "../filter/PageSelector";
import { StyledNavigationBar, StyledNavigationText, StyledNavigationTextSpan, StyledNavigationTextWrapper } from "./styles";

interface AppProps {
    showing: number;
    total: number;
    changePage: Dispatch<number>
    totalPages: number;
    currentPage: number;

}
export default function NavigationBar({ showing, total, changePage, totalPages, currentPage }: AppProps): JSX.Element {
    return (
        <StyledNavigationBar>
            <StyledNavigationTextWrapper>
                <StyledNavigationText>
                    {`16 of 32 `}
                    <StyledNavigationTextSpan>products</StyledNavigationTextSpan>
                </StyledNavigationText>
            </StyledNavigationTextWrapper>
            <PageSelector changePage={changePage} currentPage={currentPage} totalPages={totalPages} />
        </StyledNavigationBar>
    )
}