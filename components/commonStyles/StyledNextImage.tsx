import Image, { ImageProps } from "next/image"

interface AppProps extends ImageProps {
    className?: string
}
const UnstyledNextImage = (props: AppProps) => {
    let { className, ...imageProps } = props
    return (
        <div className={className}>
            <Image {...imageProps} />
        </div>
    )
}

export default UnstyledNextImage