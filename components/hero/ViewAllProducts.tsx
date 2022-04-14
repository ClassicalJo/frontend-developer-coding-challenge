interface AppProps {
    className?: string,
    children: React.ReactNode
}

export default function ViewAllProducts({ className, children }: AppProps): JSX.Element {
    return (
        <div className={className}>
            {children}
        </div>
    )
}