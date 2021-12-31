import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import tinderlogo from "../images/tinderlogo.png"



export const Navbar:FC = () => {
    return (
        <div className='flex justify-between w-6/12   p-2'>
          <Link to="/likedPics"> <button className='text-white py-1 bg-red-500 text-lg cursor-pointer hover:bg-white hover:border-red-500 border-2 hover:text-red-500 rounded-lg px-4'>Liked Pics</button></Link> 
          <Link to="/"><img className='w-20 object-contain cursor-pointer' src={tinderlogo} alt="tinder logo" /></Link>  
        </div>
    )
}
