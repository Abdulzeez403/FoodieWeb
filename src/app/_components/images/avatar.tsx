import { Avatar, Skeleton } from 'antd'
import React from 'react'


interface IProps {
    src: any
    size?: "small" | "default" | "large" | number
    shape?: "square" | "circle"
    active?: boolean
}

const AvatarComponents = ({ size = "default", shape = "circle", src, active = false }: IProps) => {
    return (
        <Avatar
            src={src}
            shape={shape}
            size={size}
            alt="image"
        />
    )
}

export default AvatarComponents
