import React from 'react';
import { FC } from 'react';
import { Navbar } from './components/Navbar';
import { SwipeCards } from './components/SwipeCards';


const App:FC=()=> {
  return (
    <div>
   <Navbar/>

   <SwipeCards/>
    </div>
  );
}

export default App;
