import React from 'react'


interface IProps {
    title: string,
    description: string
}

const HeaderComponents = ({ title, description }: IProps) => {
    return (
        <div className="text-center py-5">
            <h4 className='font-bold text-[28px]'>{title}</h4>
            <p className='text-sm text-slate-400'>{description}</p>
        </div>
    )
}

export default HeaderComponents