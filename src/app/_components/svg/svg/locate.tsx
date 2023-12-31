

// HeartIcon.js

import React from 'react';
import SVGIcon from '../svg';

interface IProps {
    color: string,
    stroke?: string,
}

const LocationIcon = ({ color, stroke }: IProps) => {
    return (
        <SVGIcon width="24" height="24" viewBox="0 0 24 24" color={color} stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
        </SVGIcon>
    );
};

export default LocationIcon;
