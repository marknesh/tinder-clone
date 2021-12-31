import React from 'react';
import { FC } from 'react';
import { Navbar } from './components/Navbar';
import { SwipeCards } from './components/SwipeCards';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import { LikedPics } from './components/LikedPics';



const App:FC=()=> {
  return (
    <Router>
    <div className='bg-[whitesmoke] min-h-screen'>
   <Navbar/>
   <Routes>

<Route path="/" element={<SwipeCards/>} />

<Route path="/likedPics" element={<LikedPics/>} />
   


   </Routes>

   
    </div>
    </Router>
  );
}

export default App;
