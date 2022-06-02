import styled from "styled-components";
import breakpoints from "../breakpoints";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import UnstyledNextImage from "../commonStyles/StyledNextImage";
import textStyles from "../commonStyles/text";

export const StyledBrowse = styled.div`
    display: flex;
    margin-bottom: 40px;
    @media (min-width: ${breakpoints.tablet}){
        justify-content: center;    
        height: 771px;
        margin-bottom: 0px;
    }
    @media (min-width: ${breakpoints.desktop}){
        height: 817.5px;
    }
`
export const StyledBrowseWrapper = styled.div`
    display: flex;
    flex:1;
    position: relative;
    height: 100%;
    @media (min-width: ${breakpoints.tablet}){
        max-width: 980px;
    }
    @media (min-width: ${breakpoints.desktop}){
        max-width: 1464px;
    }
`

export const StyledBackground = styled.div`
    background: ${colors.specials.illustrationBG};
    position: absolute;
    width: 100vw;
    height: 100%;
    left: calc((100% - 100vw) /2);
    
    @media (min-width: ${breakpoints.tablet}){
        background: ${colors.specials.sectionBG};
        backface-visibility: hidden;
        height: 656px;
        top:0;
        
    }
    @media (min-width: ${breakpoints.desktop}){
        bottom: 0px;
        height: 528px;
        width: 1920px;
        left: calc((100% - min(100vw, 1920px))/2);
        top:92px;
    }
`

export const StyledCardContainer = styled.div`
    flex: 1;
    display: flex;
    position: relative;
    gap:36px;
    flex-direction: column;
    margin-top: 180px;
    margin-bottom: 32px;
    @media (min-width: ${breakpoints.tablet}){
        margin-top: 0px;
        margin-bottom: 0px;
        gap: 8px;
        flex-direction: row;
        max-height: 477px;
        top:147px;
    }
    @media (min-width: ${breakpoints.desktop}){
        left: -78px;
    }
`
export const StyledCard = styled.div`
    box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
    border: solid 1px ${colors.neutrals["300"]};
    border-radius: 35px;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    flex:1;
    flex-direction: column;
    z-index: 5;
    position: relative;
    padding: 12px; 
    @media (min-width: ${breakpoints.desktop}){
        background-color: white;
        top: -170px;
        height:680px;
        min-width:532px;
        
        &:nth-child(1) {
            transform: rotate(-3deg);
            left: 6%;
            top: -137px;
            z-index: 1;
            
        }
        &:nth-child(2) {
            z-index: 2;
        }
        &:last-child {
            transform: rotate(3deg);
            left: -6%;
            top: -137px;
            z-index: 3;
        }
    }
    
`

export const StyledWalkImage = styled(UnstyledNextImage)`
    position: absolute;
    width:317px;
    bottom: -46px;;
    left: calc((309px - 100% )/-2);
    @media (min-width: ${breakpoints.tablet}) {
        right:0;
        
        bottom:0;
        top:0;
        width:299px;
        height:500px;        
    }    
    @media (min-width: ${breakpoints.desktop}) {
        left:0;
        width:508px;
        height:500px;
    }    
    
`
export const StyledWalkImageWrapper = styled.div`
    background: ${colors.specials.illustrationBG};   
    border-radius:27.5px 27.5px 0 0;
    min-height: 245px;
    width:100%;
    position: relative;
    overflow: hidden;
    flex:1;
    @media (min-width: ${breakpoints.tablet}) {
        height:290px;        
    }    
    @media (min-width: ${breakpoints.desktop}){
        width:508px;
        height: 498px;
    }
`
export const StyledTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap:16px;
    
`
export const StyledTitle = styled.p`
    ${textStyles.withQuery(
    textStyles.desktop.titles.l3,
    textStyles.mobile.titles.l3)}
    
    background: ${colors.brand.default};
    ${mixins.gradientText(colors.brand.default)}
    
`

export const StyledSubtitle = styled.p`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default
)}
    color: ${colors.neutrals["600"]};
    margin-top: 14px;
    margin-bottom:8px;
    
    @media (min-width: ${breakpoints.desktop}){
        max-width: 75%;
    }
`

export const StyledIconWrapper = styled.div`
    ${mixins.responsiveIcons(48, 40)}
    ${mixins.centerDiv}
    border-radius: 10px;
    background: ${colors.brand.light};
`
export const StyledIcon = styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(36, 28)}
    
`
export const StyledTextArea = styled.div`
    padding: 12px 22px 22px 22px;
    border: 1px solid ${colors.neutrals["300"]};
    border-radius: 0px 0px 27.5px 27.5px;
    border-top: 0px;
    background-color: white;
    @media (min-width: ${breakpoints.desktop}){
        padding: 12px 0px 24px 24px;    
    }
`
