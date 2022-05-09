import Image, { ImageProps } from "next/image"

interface AppProps extends ImageProps {
    className?: string;
    alt: string;
    width: number;
    height: number;
}
const UnstyledNextImage = (props: AppProps) => {
    let { className, width, height, alt, ...imageProps } = props
    return (
        <div className={className}>
            <Image {...imageProps} alt={alt} width={width} height={height} />
        </div>
    )
}

export default UnstyledNextImage