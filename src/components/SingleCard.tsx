import React from 'react'
import { FC } from 'react'
import TinderCard from 'react-tinder-card'

type CatsType=[] | null


interface Props {
    key:number;
    image:string;
    cats:CatsType;
    setCats:(cats:CatsType)=> void
}



export const SingleCard:FC<Props> = ({image,cats,setCats}) => {
   
     
    const handleOnSwipe=(e:any)=>{
        
        const swipedPic:any=cats?.splice(cats.length-1,1)
   if(e === "right"){
    const savedLikedCats=JSON.parse(window.localStorage.getItem("likedCats") as string) 


    if(savedLikedCats){
        window.localStorage.setItem("likedCats",JSON.stringify([...savedLikedCats,...swipedPic]))
    }else{
        window.localStorage.setItem("likedCats",JSON.stringify(swipedPic))
    
    }

   }
    
        
      
        setCats(cats as CatsType)
    }
    
    
    return (
        <TinderCard
        
        
        className='absolute   '
        preventSwipe={["up","down"]}
        onSwipe={handleOnSwipe}
        
        
        
        >
            
            <img className=' w-11/12 mx-auto aspect-square   h-[400px]   md:w-[30rem] md:h-[70vh]   rounded-xl     ' src={image} alt="" />
        </TinderCard>
    )
}
