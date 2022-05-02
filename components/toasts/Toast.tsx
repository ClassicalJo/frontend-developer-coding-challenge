interface AppProps {
    item: string;
}
export default function Toast({ item }: AppProps): JSX.Element {
    return (
        <div><span>{item}</span> redeemed successfully</div>
    )
}