interface AppProps {
    message: string;
}
export default function ErrorToast({ message }: AppProps): JSX.Element {
    return (
        <div>
            {message}
        </div>
    )
}