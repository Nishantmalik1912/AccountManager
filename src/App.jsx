import React from 'react'


import Navbar from './Components/navbar/Navbar';

import { Outlet } from 'react-router-dom';



const App = () => {



  return (

    <div id='main' >
      <Navbar/> 
      
      <Outlet/>

    </div>
  )
}

export default App
