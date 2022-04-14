import styled from "styled-components";
import breakpoints from "../breakpoints";

export const StyledMain = styled.div`
    margin: 0 20px;
    @media (min-width: ${breakpoints.desktop}){
        margin: 0 80px;
    }
    
`