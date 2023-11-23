
import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
    onClick?: () => void;
    type?: 'primary' | 'default' | "link" | "text" | "dashed";
    children: React.ReactNode;
    className?: string;
    title?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'default', title, className, children }) => {
    return (
        <AntButton
            type={type}
            onClick={onClick}
            className={`py-0 text-green-500 bg-green-100 border-none hover:border-2 hover:border-green-300 hover:bg-white hover:text-green-500 rounded-[2rem] text-[16px] font-bold ${className}`} >
            {children}
        </AntButton>
    );
};

export default Button;
