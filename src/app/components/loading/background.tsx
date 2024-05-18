import React, { useState } from 'react'
interface IProp {
    isLoading: boolean
}

const Background = ({ isLoading }: IProp) => {



    return (
        <div className='flex justify-center align-center h-60 z-100 bg-slate-500 w-screen'>
            {
                isLoading ? (<h3>Loading....</h3>) : null
            }

        </div>
    )
}

export default Background;