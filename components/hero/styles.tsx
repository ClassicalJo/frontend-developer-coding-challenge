import styled from "styled-components"
import Picture from "./Picture"
import Explore from "./Explore"
import Zone from "./Zone"
import Subtitle from "./Subtitle"
import Tech from "./Tech"
import Waves from './Waves'
import textStyles from "../commonStyles/text"
import colors from "../commonStyles/colors"
import mixins from '../commonStyles/mixins'
import UnstyledNextImage from "../commonStyles/StyledNextImage"

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
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
    flex:1;
    position: relative;
    min-width: 720px;
    height:600px;
    background: ${colors.specials.sectionBG};
    border-radius:15%;
    pointer-events: none;
    
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
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.caps24LS,
    textStyles.mobile.texts.l1.caps24LS)}
    color: ${colors.neutrals["600"]};
    margin-bottom: 8px;
    
`
export const StyledTech = styled(Tech)`
    ${textStyles.withQuery(
    textStyles.desktop.titles.l1,
    textStyles.mobile.titles.l1)}
    ${mixins.gradientText(colors.brand.default)}
    max-width: 602px;
`
export const StyledZone = styled(Zone)`
    ${textStyles.withQuery(
    textStyles.desktop.titles.l1,
    textStyles.mobile.titles.l1)}
    color: ${colors.neutrals["900"]}
`
export const StyledSubtitle = styled(Subtitle)`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    color: ${colors.neutrals["600"]};
    margin-top: 24px;
    margin-bottom: 64px;

`
export const StyledProductButton = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 317.5px;
    height: 78px;
    background: ${colors.brand.default};
    border-radius: 24px;
    border: 0px;
    user-select: none;
    cursor:pointer;
    :hover {
        background: ${colors.brand.hover};
    }
`

export const StyledProductButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const StyledProductButtonText = styled.p`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default
)}
    margin-right:4px;
    color:white;
`

export const StyledIconWrapper = styled(UnstyledNextImage)`
        position:relative;
        ${mixins.responsiveIcons(24, 20)}
        transform: scale(1.15);
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
