import axios from 'axios'
import React, { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { SingleCard } from './SingleCard'

interface Props {
    
}

export const SwipeCards:FC = (props: Props) => {

    const [catImages,setCatImages]=useState<null | []>(null)

useEffect(()=>{

    const fetchCatImages=async()=> {


        const res= await axios.get("https://api.thecatapi.com/v1/breeds",{
            headers:{"X-Api-Key":`${process.env.REACT_APP_CAT_API_KEY}`}
        })

        
        const catWithImages=res?.data?.filter((breed:any)=>breed.hasOwnProperty("image"))
       const fetchedCatImages=catWithImages?.map((breed:any)=>breed.image)
       
        setCatImages(fetchedCatImages)
    }

    fetchCatImages()
},[])

    return (
        <div>
            {
               catImages && catImages.map((image:any,i:number)=>(
                    <div key={i}>
<SingleCard  image={image.url} />
                    </div>
                ))
            }
            
        </div>
    )
}
