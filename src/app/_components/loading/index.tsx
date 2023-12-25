import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


interface IProps {
    className: any
    size: number
}
const loadingComponent: React.FC<IProps> = ({ className, size = 20 }: IProps) => (
    <Spin
        indicator={
            <LoadingOutlined
                style={className}
                size={size}
                spin />} />);

export default loadingComponent;