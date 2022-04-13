interface Props {
    className?: string
    children: React.ReactNode
}
export default function Picture({ children, className }: Props): JSX.Element {
    return <div className={className}>{children}</div>
}