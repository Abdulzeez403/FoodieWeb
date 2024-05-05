
"use client"

import { Input, Space } from 'antd';
import React from 'react'
import LocationIcon from '../svg/svg/locate';
import DownIcon from '../svg/svg/down';

interface IProps {
    country: string,
    region: string
}


const LocationInput = ({ country, region }: IProps) => {
    return (
        <Space.Compact size="large" className='bg-white rounded-md py-4 px-2 w-[90%] mx-auto my-6 flex justify-center items-center'>
            <Input addonBefore={<LocationIcon color="none" stroke='red' />} addonAfter={<DownIcon color="black" />} placeholder={`${country + " " + "," + region}`}
                className=' w-96 mx-auto' />
        </Space.Compact>
    )
}

export default LocationInput;