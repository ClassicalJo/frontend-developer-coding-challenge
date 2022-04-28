import { Dispatch, SyntheticEvent } from "react";
import { FilterMethod, SortMethod } from "../../types";
import PageSelector from "./PageSelector";
import SelectionButton from "./SelectionButton";
import {
    StyledFilterBar,
    StyledFilterBarContainer,
    StyledFilterSelect,
    StyledFilterSelectWrapper,
    StyledFilterText,
    StyledOption,
    StyledSelectedButtonContainer,
    StyledVerticalSeparator
} from './styles'

interface AppProps {
    sortMethod: SortMethod;
    setSortMethod: Dispatch<SortMethod>;
    setFilterMethod: Dispatch<FilterMethod>;
    setCurrentPage: Dispatch<number>;
    changePage: Dispatch<number>;
    totalPages: number;
    currentPage: number;
}
export default function FilterBar({ changePage, sortMethod, setSortMethod, setFilterMethod, totalPages, currentPage, setCurrentPage }: AppProps): JSX.Element {
    let onClick = (sortMethod: SortMethod) => {
        setSortMethod(sortMethod)
        setCurrentPage(0)
    }
    let onChange = (e: SyntheticEvent) => {
        let { value } = e.target as HTMLOptionElement
        setFilterMethod(value as FilterMethod)
        setCurrentPage(0)
    }

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
                <StyledSelectedButtonContainer>
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
                </StyledSelectedButtonContainer>
            </StyledFilterBarContainer>
            <PageSelector changePage={changePage} totalPages={totalPages} currentPage={currentPage} />
        </StyledFilterBar>
    )
}