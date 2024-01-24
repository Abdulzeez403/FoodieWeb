import React, { useState } from 'react';
import { Drawer } from 'antd';

interface IProps {
    title?: string;
    show: boolean;
    maskClosable?: boolean;
    width?: number | string;
    position?: "left" | "right";
    children: React.ReactNode;
    headerChildren?: React.ReactNode;
    onDismiss?: () => void;
}
const ModalComponent2: React.FC<IProps> = ({
    title,
    show,
    children,
    maskClosable,
    headerChildren,
    width,
    onDismiss,
    position = "right"
}) => {


    return (
        <Drawer title={title}
            width={width || 720}
            onClose={onDismiss}
            open={show}
            // bodyStyle={{ paddingBottom: 80 }}
            extra={headerChildren}
            maskClosable={maskClosable || false}
            placement={position}>
            {children}
        </Drawer>
    );
};

export default ModalComponent2;