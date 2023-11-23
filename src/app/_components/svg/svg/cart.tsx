// HeartIcon.js

import React from 'react';
import SVGIcon from '../svg';

interface IProps {
    color: string,
}

const CartIcon = ({ color }: IProps) => {
    return (
        <SVGIcon width="24" height="24" viewBox="0 0 24 24" color={color} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart">
            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </SVGIcon>
    );
};

export default CartIcon;