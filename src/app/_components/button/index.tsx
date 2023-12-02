
import React from 'react';
import { Button as AntButton } from 'antd';

interface ButtonProps {
    onClick?: () => void;
    type?: 'primary' | 'default' | "link" | "text" | "dashed";
    htmlType?: "button" | "submit" | "reset" | undefined
    children: React.ReactNode;
    className?: string;
    size?: "small" | "middle" | "large";
    shape?: "default" | "circle" | "round"
    ghost?: boolean
    icon?: React.ReactNode
    href?: string
}

const ButtonComponent: React.FC<ButtonProps> = ({
    onClick,
    type = 'default',
    size = "small",
    shape = "default",
    className,
    ghost = false,
    htmlType = 'button',
    icon,
    href,
    children }) => {
    return (
        <AntButton
            type={type}
            htmlType={htmlType}
            onClick={onClick}
            size={size}
            shape={shape}
            ghost={ghost}
            icon={icon}
            href={href}
            className={` text-green-500 bg-green-100 border-none hover:border-2 hover:border-green-300 hover:bg-white hover:text-green-500  text-[16px] font-bold ${className}`} >
            {children}
        </AntButton>
    );
};

export default ButtonComponent;
