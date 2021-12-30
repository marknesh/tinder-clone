import React from 'react'
import { FC } from 'react'

interface Props {
    
    image:string
}

export const SingleCard:FC<Props> = ({image}) => {
    return (
        <div>
            <img src={image} alt="" />
        </div>
    )
}
