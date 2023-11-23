

// HeartIcon.js

import React from 'react';
import SVGIcon from '../svg';

interface IProps {
    color: string,
    stroke?: string,
}

const SearchIcon = ({ color, stroke }: IProps) => {
    return (
        <SVGIcon width="24" height="24" viewBox="0 0 24 24" color={color} stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">  <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </SVGIcon>
    );
};

export default SearchIcon;



