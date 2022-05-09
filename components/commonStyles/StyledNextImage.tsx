import Image, { ImageProps } from "next/image"

interface AppProps extends ImageProps {
    className?: string;
    alt: string;
}
const UnstyledNextImage = (props: AppProps) => {
    let { className, alt, ...imageProps } = props
    return (
        <div className={className}>
            <Image {...imageProps} alt={alt}/>
        </div>
    )
}

export default UnstyledNextImage