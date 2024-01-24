

// HeartIcon.js

import React from 'react';
import SVGIcon from '../svg';

interface IProps {
    color: string,
    stroke?: string,
}

const MenuIcon = ({ color, stroke }: IProps) => {
    return (
        <SVGIcon width="24" height="24" viewBox="0 0 24 24" color={color} stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">
            <line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>
        </SVGIcon>
    );
};

export default MenuIcon;
