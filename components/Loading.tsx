interface AppProps {
    children: React.ReactNode;
    loading: Boolean;

}
export default function Loading({ children, loading }: AppProps): JSX.Element {
    switch (loading) {
        case false: return <div>{children}</div>
        default: return <div>Loading</div>
    }
}