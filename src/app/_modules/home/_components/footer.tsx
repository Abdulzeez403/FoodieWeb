import React from 'react'

const FooterSection = () => {
    return (
        <div className='flex justify-center py-4'>
            <div className='text-center'>
                <h4 className='font-bold text-xl'>Foodie</h4>
                <p className='text-md'>Elevate Your Taste, Elevate Your Day</p>
                <p>Copyright © {new Date().getFullYear()} Foodie, All Rights Reversed! </p>
            </div>
        </div>
    )
}

export default FooterSection