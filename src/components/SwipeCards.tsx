import axios from 'axios'
import React, { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { SingleCard } from './SingleCard'
import { HeartIcon, XIcon } from '@heroicons/react/solid'


export const SwipeCards:FC = () => {

    
    const [cats,setCats]=useState<null | []>(null)
    const [loading,setLoading]=useState<boolean>(true)

useEffect(()=>{

    const fetchCats=async()=> {


        try{
            const res= await axios.get("https://api.thecatapi.com/v1/breeds",{
                headers:{"X-Api-Key":`${process.env.REACT_APP_CAT_API_KEY}`}
            })
            setLoading(false)
    
            
            const catsData=res?.data?.filter((breed:any)=>breed.hasOwnProperty("image"))
            
            
         
            setCats(shuffle(catsData))

        }catch(err){
            setLoading(false)
        }
       
    }

    fetchCats()
},[])

function shuffle(array:[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const handleLike=()=>{
    
    let newCats=([...cats as []  ])


    const likedCat=newCats.splice(newCats.length-1,1)
const savedLikedCats=JSON.parse(window.localStorage.getItem("likedCats") as string) 
    window.localStorage.setItem("likedCats",JSON.stringify([...savedLikedCats,likedCat]))
    setCats(newCats as [])
}

const handleDislike=()=>{
    
    let newCats=([...cats as []  ])


   const dislikedCat= newCats.splice(newCats.length-1,1)


    window.localStorage.setItem("dislikedCats",JSON.stringify(dislikedCat))
    
    setCats(newCats as [])
}




    return (
        <div>

{loading && <div>
    
    
    <h1 className='text-center font-bold text-2xl pt-10'>Fetching cat pictures...</h1>
    </div> }
            

{
               (cats as [])?.length > 0  && 

            <div className='fixed bottom-[4vh] space-x-10 flex items-center justify-center mx-auto w-full'>
<div onClick={handleDislike} className='bg-white text-red-500  hover:text-white  transition-all duration-500 ease-in-out  hover:bg-red-400 rounded-full p-2 cursor-pointer'>

<XIcon  className='w-10 h-10 ' />
</div>

<div onClick={handleLike} className='bg-[#FE5067]  text-white hover:text-[#FE5067] transition-all duration-500 ease-in-out  hover:bg-white rounded-full cursor-pointer p-2'>

<HeartIcon  className='w-10 h-10  ' />
</div>

            </div>
}
    
        <div className='flex justify-center pt-7 '>


{ cats?.length === 0 && <div>
    
    
    <h1 className='text-center font-bold text-2xl pt-10'>No pictures available</h1>
    </div>}
            
            {
               (cats as [])?.length > 0 && (cats as []).map((cat:any,i:number)=>(
                    
<SingleCard key={i} cats={cats} setCats={setCats}  image={cat.image.url} />
                
                ))
            }
            
        </div>
        </div>
    )
}
