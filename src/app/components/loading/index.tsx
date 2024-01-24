import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


interface IProps {
    loadingStyle?: any
    size?: number,
    spin?: boolean
}
const LoadingComponent: React.FC<IProps> = ({ loadingStyle, size = 50, spin }: IProps) => (
    <Spin
        indicator={
            <LoadingOutlined
                style={{ width: 20, color: "green" }}
                size={size}
                spin={spin} />} />);

const FullPageLoading = () => {
    <Spin
        style={{ width: 20, color: "green" }}
        size="large"
        spinning
        fullscreen />
}

export { LoadingComponent, FullPageLoading };