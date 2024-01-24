

// HeartIcon.js

import React from 'react';
import SVGIcon from '../svg';

interface IProps {
    color: string,
    stroke?: string,
}

const StarIcon = ({ color, stroke }: IProps) => {
    return (
        <SVGIcon width="22" height="22" viewBox="0 0 24 24" color={color} stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">    <polygon
            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </SVGIcon>
    );
};

export default StarIcon;



