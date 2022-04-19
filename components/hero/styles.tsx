import styled from "styled-components"
import Picture from "./Picture"
import Explore from "./Explore"
import Zone from "./Zone"
import Subtitle from "./Subtitle"
import Tech from "./Tech"
import ViewAllProducts from './ViewAllProducts'
import Waves from './Waves'
import textStyles from "../commonStyles/text"
import colors from "../commonStyles/colors"
import breakpoints from "../breakpoints"
import mixins from '../commonStyles/mixins'
export const StyledTextArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 140px;
    flex:1 
`
export const StyledColumns = styled.div`
    margin-top: 100px;
    display: flex;
`
export const StyledPicture = styled(Picture)`
    box-shadow: 5px 5px 20px ${colors.neutrals["100"]};
    flex:1;
    position: relative;
    min-width: 720px;
    height:600px;
    background: ${colors.specials.sectionBG};
    border-radius:15%;
    
`
export const StyledPictureWrapper = styled.div`
    position: absolute;
    bottom:-10%;
    left:-12.5%;
    width: 900px;
    height:900px;
    clip-path: path("M0 0 L 0 840 L 800 840 L 800 0 Z");
    object-fit: cover;

`

export const StyledExplore = styled(Explore)`
    ${textStyles.desktop.texts.l1.caps24LS}
    color: ${colors.neutrals["600"]};
    
`
export const StyledTech = styled(Tech)`
    ${textStyles.desktop.titles.l1}
    ${mixins.gradientText(colors.brand.default)}
    max-width: 750px;
`
export const StyledZone = styled(Zone)`
    ${textStyles.desktop.titles.l1}
    color: ${colors.neutrals["900"]}
`
export const StyledSubtitle = styled(Subtitle)`
    
    color: ${colors.neutrals["600"]};
    margin: 35px 0;

    @media (min-width: ${breakpoints.mobile}){
        ${textStyles.mobile.texts.l1.default}
        max-width: 300px;
        text-align: center;
        
    }
    @media (min-width: ${breakpoints.desktop}){
        ${textStyles.desktop.texts.l1.default}
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

export const StyledWaves = styled(Waves)`
    position:absolute;
    width:1920px;
    height:1400px;
    z-index: -2;  
`
export const StyledWavesWrapper = styled.div`
    top: -40px;
    position: relative;
`
export const StyledWavesOverflow = styled.div`
    width:100vw;
    position: absolute;
    left:calc((1935px - 1464px) /-2);
`
