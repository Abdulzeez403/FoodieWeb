

// HeartIcon.js

import React from 'react';
import SVGIcon from '../svg';

interface IProps {
    color: string,
    stroke?: string,
}

const DownIcon = ({ color, stroke }: IProps) => {
    return (
        <SVGIcon width="24" height="24" viewBox="0 0 24 24" color={color} stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">    <polyline points="6 9 12 15 18 9"></polyline>
        </SVGIcon>
    );
};

export default DownIcon;



