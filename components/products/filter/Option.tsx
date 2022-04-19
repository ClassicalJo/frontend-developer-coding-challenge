import { FilterMethod } from "../../types"

interface AppProps {
    className?: string;
    value: FilterMethod;
    text: string;

}
export default function Option({ className, value, text }: AppProps): JSX.Element {
    return (
        <option className={className} value={value}>
            {text}
        </option>
    )
}