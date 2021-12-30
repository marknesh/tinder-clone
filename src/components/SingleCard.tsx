import React from 'react'
import { FC } from 'react'
import TinderCard from 'react-tinder-card'

interface Props {
    
    image:string
}


export const SingleCard:FC<Props> = ({image}) => {
    return (
        <TinderCard
        
        
        className='absolute  '
        preventSwipe={["up","down"]}
        
        
        >
            <img className=' w-11/12 mx-auto   aspect-square h-[400px]  md:w-[30rem] md:h-[80vh]   rounded-xl     ' src={image} alt="" />
        </TinderCard>
    )
}
