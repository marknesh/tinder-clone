import React from 'react'
import { useState } from 'react'


export const LikedPics = () => {

const [likedCats,setLikedCats]=useState(JSON.parse(window.localStorage.getItem("likedCats") as string)?.reverse() )
    
        

    

    return (
        <div className='pb-10'>

            <h1 className='text-3xl font-bold py-10 text-center '>Liked Pictures</h1>
        <div className='grid md:grid-cols-2 xl:grid-cols-4  gap-x-6  mx-auto w-11/12 gap-y-10'>
             
             {
               (likedCats as [])?.length > 0 && (likedCats as []).map((cat:any,i:number)=>(
                
                    <img key={i} className=' w-11/12 mx-auto aspect-square   h-[400px]   md:w-[30rem] md:h-[20rem]   rounded-xl     ' src={cat.image.url} alt="" />

                

                
                ))
            }

        
        </div>
            {
                !likedCats  && <div>
                      <h1 className='text-center font-bold text-2xl pt-10'>No  liked pictures available</h1>
                 </div>
             }
             </div>
    )
}
