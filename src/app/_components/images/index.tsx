// components/ImageComponent.tsx

import React from 'react';
import Image from "next/image"

interface ImageComponentProps {
    src: any;
    alt: string;
    className?: string;
    width?: number
    height?: number
    sizes?: any
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, className, width = 500, height = 500, sizes }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority
            sizes={sizes}
        // objectFit='cover'
        />
    );
};

export default ImageComponent;
