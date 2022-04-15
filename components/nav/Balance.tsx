interface AppProps {
    points: number
    className?: string
}
export default function Balance({ points, className }: AppProps): JSX.Element {
    return (
        <p className={className}>{points.toLocaleString()}</p>
    )
}