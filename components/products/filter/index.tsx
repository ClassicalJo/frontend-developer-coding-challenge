import { Dispatch, SyntheticEvent } from "react";
import { FilterMethod, SortMethod } from "../../types";
import SelectionButton from "./SelectionButton";
import chevron from '../../../assets/icons/chevron-default.svg'
import {
    StyledFilterBar,
    StyledFilterBarContainer,
    StyledFilterSelect,
    StyledFilterSelectWrapper,
    StyledFilterText,
    StyledOption,
    StyledPageButtonRight,
    StyledPageButtonLeft,
    StyledPageSelector,
    StyledPageSpan,
    StyledPageText,
    StyledVerticalSeparator
} from './styles'

interface AppProps {
    sortMethod: SortMethod;
    setSortMethod: Dispatch<SortMethod>;
    setFilterMethod: Dispatch<FilterMethod>;
    setCurrentPage: Dispatch<number>;
    totalPages: number;
    currentPage: number;
}
export default function FilterBar({ sortMethod, setSortMethod, setFilterMethod, totalPages, currentPage, setCurrentPage }: AppProps): JSX.Element {
    let onClick = (sortMethod: SortMethod) => {
        setSortMethod(sortMethod)
        setCurrentPage(0)
    }
    let onChange = (e: SyntheticEvent) => {
        let { value } = e.target as HTMLOptionElement
        setFilterMethod(value as FilterMethod)
        setCurrentPage(0)
    }
    let changePage = (int: number) => currentPage + int >= 0 && currentPage + int < totalPages && setCurrentPage(currentPage + int)
    let methods: FilterMethod[] = ['All products', 'Gaming', 'Audio', 'Smart Home', 'Monitors & TV']
    return (
        <StyledFilterBar>
            <StyledFilterBarContainer>
                <StyledFilterText>Filter by: </StyledFilterText>
                <StyledFilterSelectWrapper>
                    <StyledFilterSelect onChange={onChange}>
                        {methods.map((k, i) => (
                            <StyledOption
                                key={`optionMethod${i}`}
                                value={k}
                                text={k}
                            />
                        ))}

                    </StyledFilterSelect>
                </StyledFilterSelectWrapper>
                <StyledVerticalSeparator />
                <StyledFilterText>Sort by: </StyledFilterText>

                <SelectionButton
                    text="Most Recent"
                    method="recent"
                    current={sortMethod}
                    onClick={onClick}
                />
                <SelectionButton
                    text="Lowest Price"
                    method="lowest-price"
                    current={sortMethod}
                    onClick={onClick}
                />
                <SelectionButton
                    text="Highest Price"
                    method="highest-price"
                    current={sortMethod}
                    onClick={onClick}
                />
            </StyledFilterBarContainer>
            <StyledPageSelector>
                <StyledPageButtonLeft src={chevron} onClick={() => changePage(-1)} />
                <StyledPageText>
                    <StyledPageSpan>{`Page ${currentPage + 1}`}</StyledPageSpan>
                    {` of ${totalPages}`}
                </StyledPageText>
                <StyledPageButtonRight src={chevron} onClick={() => changePage(1)} />
            </StyledPageSelector>
        </StyledFilterBar>
    )
}