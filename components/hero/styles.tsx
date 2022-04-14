import styled from "styled-components"
import Picture from "./Picture"
import Explore from "./Explore"
import Zone from "./Zone"
import Subtitle from "./Subtitle"
import Tech from "./Tech"
import ViewAllProducts from './ViewAllProducts'
import textStyles from "../commonStyles/text"
import colors from "../commonStyles/colors"
import breakpoints from "../breakpoints"

export const StyledTextArea = styled.div`
    display: flex;
    flex-direction: column;
    flex:1 

`
export const StyledColumns = styled.div`
    display: flex;
`
export const StyledPicture = styled(Picture)`
    flex:1;
    background-color: aliceblue;
    border: 5px solid lavenderblush;
`
export const StyledExplore = styled(Explore)`
    ${textStyles.desktop.texts.l1.caps24LS}
    color: ${colors.neutrals["600"]}
    
`
export const StyledTech = styled(Tech)`
    ${textStyles.desktop.titles.l1}
    background: ${colors.brand.default};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    max-width: 750px;
`
export const StyledZone = styled(Zone)`
    ${textStyles.desktop.titles.l1}
`
export const StyledSubtitle = styled(Subtitle)`
    ${textStyles.desktop.texts.l1.default}
    color: ${colors.neutrals["600"]};
    

    @media (min-width: ${breakpoints.mobile}){
        ${textStyles.mobile.texts.l1.default}
        max-width: 300px;
        text-align: center;
        
    }
    @media (min-width: ${breakpoints.desktop}){
        max-width: 510px;
        text-align: left;
    }
    
`
export const StyledProductButton = styled(ViewAllProducts)`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 317.5px;
    height: 78px;
    background: ${colors.brand.default};
    border-radius: 20px;
    border: 0px;
`

export const StyledProductButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledProductButtonText = styled.p`
    ${textStyles.mobile.texts.l1.lightweight}
    color:white;
`

export const StyledIconWrapper = styled.div`
    flex:1;
    height: 16px;
    width: 16px;

`