// SVGIcon.tsx

import React, { ReactNode } from 'react';

interface SVGIconProps {
    width: string;
    height: string;
    viewBox: string;
    color: string;
    stroke?: string,
    strokewidth?: any;
    strokelinecap?: string,
    strokelinejoin?: string,
    className?: string,

    children: ReactNode;
}


const SVGIcon: React.FC<SVGIconProps> = ({ width, height, viewBox, color, strokewidth, stroke, strokelinecap, strokelinejoin, className, children }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            fill={color}
            stroke={stroke}
            stroke-width={strokewidth}
            stroke-linecap={strokelinecap}
            stroke-linejoin={strokelinejoin}
            className={className}

        >
            {children}
        </svg>
    );
};

export default SVGIcon;
