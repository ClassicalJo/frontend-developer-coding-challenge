import { StaticImageData } from "next/image";
import { StyledIcon, StyledIconCross, StyledIconAndText, StyledText, StyledTextArea } from "./styles";

interface AppProps {
    className?: string;
    item: string;
    icon: StaticImageData;
    crossActive: StaticImageData;
    crossDefault: StaticImageData;
}
export default function Toast({ item, className, icon, crossActive, crossDefault }: AppProps): JSX.Element {
    return (
        <div className={className}>
            <StyledIconAndText>
                <StyledIcon src={icon} width={32} height={32} />
                <StyledTextArea>
                    <p><StyledText>{item}</StyledText>{" redeemed successfully"}</p>
                </StyledTextArea>
                <StyledIconCross src={crossDefault} width={23} height={23} />
            </StyledIconAndText>
        </div>
    )
}