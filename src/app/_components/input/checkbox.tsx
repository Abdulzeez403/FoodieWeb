import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
};

interface IProps {
    checked?: boolean
    title?: string
}

const CheckBoxComponent = ({ checked, title }: IProps) => <Checkbox onChange={onChange} className='font-semibold'>{title}</Checkbox>;

export default CheckBoxComponent;