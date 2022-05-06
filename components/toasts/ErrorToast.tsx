import { StaticImageData } from "next/image";
import { StyledIcon, StyledIconAndText, StyledIconCross, StyledText, StyledTextArea } from "./styles";

interface AppProps {
    className?: string;
    message: string;
    icon: StaticImageData;
    crossActive: StaticImageData;
    crossDefault: StaticImageData;
}
export default function ErrorToast({ message, className, icon, crossActive, crossDefault }: AppProps): JSX.Element {
    return (
        <div className={className}>
            <StyledIconAndText>
                <StyledIcon priority={true} src={icon} width={32} height={32} />
                <StyledTextArea>
                    <p>{message}</p>
                </StyledTextArea>
                <StyledIconCross src={crossDefault} width={23} height={23} />
            </StyledIconAndText>
        </div>
    )
}