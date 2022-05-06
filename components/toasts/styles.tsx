import styled, { css } from "styled-components";
import breakpoints from "../breakpoints";
import colors from "../commonStyles/colors";
import mixins from "../commonStyles/mixins";
import UnstyledNextImage from "../commonStyles/StyledNextImage";
import textStyles from "../commonStyles/text";
import ErrorToast from "./ErrorToast";
import Toast from "./Toast";

export const StyledToastsContainer = styled.div`
    position:fixed;
    bottom: 0;
    z-index: 20;
    width: calc(100% - 16px);
    left:0;
    max-width: 532px;
    margin: 0px 8px 40px 8px ;
    display: flex;
    flex-direction: column;
    gap:12px;
    @media (min-width: ${breakpoints.tablet}){
        
        margin: 0px 8px 40px 80px ;
    }
`
let commonToastStyles = css`
    ${textStyles.withQuery(
    textStyles.desktop.texts.l1.default,
    textStyles.mobile.texts.l1.default)}
    color: ${colors.neutrals['600']};
    background-color: white;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    display:flex;
    align-items: center;
    gap: 14.25px;
    padding:24px;
`
let animatedToast = css`
    animation: colorBackground 1s;
`
interface ToastProps {
    isFirst: Boolean;
    display: Boolean;
}
export const StyledToast = styled(Toast) <ToastProps>`
    ${commonToastStyles};
    border: 2px solid #29CC74;
    ${props => {
        if (!props.display) return `display: none`
        else if (props.isFirst) return animatedToast
    }}
`

export const StyledErrorToast = styled(ErrorToast) <ToastProps>`
    ${commonToastStyles};
    border: 2px solid #E07F4F;
    ${props => {
        if (!props.display) return `display: none`
        else if (props.isFirst) return animatedToast
    }}
`
export const StyledText = styled.span`
    color: ${colors.neutrals['900']};
`
export const StyledTextArea = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    height:100%;
    margin-left: 36px;
    margin-right: 30px;
`
export const StyledIconAndText = styled.div`
    position: relative;
    gap: 14.25px;
    ${mixins.centerDiv}
    flex:1;
    display: flex;
    
    
`
export const StyledIcon = styled(UnstyledNextImage)`
    ${mixins.responsiveIcons(28, 21)}
    position: absolute;
    top:0;
    left: 0;
    @media (min-width: ${breakpoints.desktop}){
        top: -2px;
    }
`

export const StyledIconCross = styled(UnstyledNextImage)`
    position: absolute;
    top:0;
    right:0;
`