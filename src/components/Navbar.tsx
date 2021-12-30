import React, { FC } from 'react'
import tinderlogo from "../images/tinderlogo.png"



export const Navbar:FC = () => {
    return (
        <div className='flex justify-center py-2'>
            <img className='w-20 object-contain cursor-pointer' src={tinderlogo} alt="tinder logo" />
        </div>
    )
}
