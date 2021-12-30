import axios from 'axios'
import React, { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { SingleCard } from './SingleCard'


export const SwipeCards:FC = () => {

    const [catImages,setCatImages]=useState<null | []>(null)

useEffect(()=>{

    const fetchCatImages=async()=> {


        const res= await axios.get("https://api.thecatapi.com/v1/breeds",{
            headers:{"X-Api-Key":`${process.env.REACT_APP_CAT_API_KEY}`}
        })

        
        const catsWithImages=res?.data?.filter((breed:any)=>breed.hasOwnProperty("image"))
       const fetchedCatImages=catsWithImages?.map((breed:any)=>breed.image)
       
        setCatImages(fetchedCatImages)
    }

    fetchCatImages()
},[])

    return (
        <div className='flex justify-center pt-7 '>
            {
               catImages && catImages.map((image:any,i:number)=>(
                    
<SingleCard key={i}  image={image.url} />
                
                ))
            }
            
        </div>
    )
}
