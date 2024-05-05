import React from 'react';

const MenuCardSkeleton = () => {
    return (
        <div className='card w-[20rem] shadow-lg rounded-md border-2 pb-5'>
            <div className='relative overflow-hidden'>
                {/* Skeleton for image */}
                <div className='w-[23rem] h-[15rem] bg-gray-300 animate-pulse'></div>
                <div className='p-[3.2rem] rounded-full bg-green-500 absolute top-[-3rem] right-[-3rem]'></div>
                <div className='absolute z-10 top-[0.6rem] right-[0.7rem]'>
                    {/* Skeleton for star icon */}
                    <div className='w-[2rem] h-[2rem] rounded-full bg-gray-300 animate-pulse'></div>
                </div>
            </div>
            <div className='py-3 p-3'>
                <div>
                    {/* Skeleton for title */}
                    <div className='w-[10rem] h-8 bg-gray-300 mb-2 animate-pulse'></div>
                </div>
                <div>
                    {/* Skeleton for description */}
                    <div className='w-[15rem] h-4 bg-gray-300 mb-2 animate-pulse'></div>
                </div>
                <div className='flex justify-between items-center py-2'>
                    <div>
                        {/* Skeleton for price */}
                        <div className='w-12 h-6 bg-gray-300 mb-2 animate-pulse'></div>
                    </div>
                    <div>
                        {/* Skeleton for button */}
                        <div className='w-12 h-12 bg-gray-300 animate-pulse'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCardSkeleton;
