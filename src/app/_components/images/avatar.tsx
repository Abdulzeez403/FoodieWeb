import { Avatar, Skeleton } from 'antd'
import React from 'react'


interface IProps {
    src: string
    size?: "small" | "default" | "large" | number
    shape?: "square" | "circle"
    active?: boolean
}

const AvatarComponents = ({ size = "default", shape = "circle", src, active = false }: IProps) => {
    return (
        <div>
            <Avatar
                src={src}
                shape={shape}
                size={size}
                alt="image"
            />
        </div>
    )
}

export default AvatarComponents
