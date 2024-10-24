import React, { useState } from 'react'
import { BrowserRouter , NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isActive, setIsActive] = useState();
    return (
     
        <div> 
            <div className=' bg-blue-50'>
                <div id='main' className='bg-blue-400 flex justify-between '>
                    <li  >
                        <NavLink > <h1 onClick={() => { setIsActive(0) }} className={
                            `m-10 rounded-lg py-2 px-6  ${isActive == 0 ? "bg-white text-blue-400" : "bg-blue-400  text-white"} border-white border-2`}>
                            All
                        </h1></NavLink>

                    </li>

                    <li>
                        <NavLink >  <h1 onClick={() => { setIsActive(1) }} className={
                            `m-10 rounded-lg py-2 px-6  ${isActive == 1 ? "bg-white text-blue-400" : "bg-blue-400 text-white "}  border-white border-2`} >
                            Daily
                        </h1></NavLink>

                    </li>

                    <li>
                        <NavLink ><h1 onClick={() => { setIsActive(2) }} className={
                            `m-10 rounded-lg py-2 px-6  ${isActive == 2 ? "bg-white text-blue-400" : "bg-blue-400 text-white"}  border-white border-2`}>
                            Weekly
                        </h1></NavLink>

                    </li>

                    <li>
                        <NavLink >   <h1 onClick={() => { setIsActive(3) }} className={
                            `m-10 rounded-lg py-2 px-6  ${isActive == 3 ? "bg-white text-blue-400" : "bg-blue-400 text-white"}  border-white border-2`}>
                            Monthly
                        </h1></NavLink>
                    </li>

                    <li>
                        <NavLink >   <h1 onClick={() => { setIsActive(4) }} className={
                            `m-10 rounded-lg py-2 px-6  ${isActive == 4 ? "bg-white text-blue-400" : "bg-blue-400 text-white"}  border-white border-2`}>
                            Yearly
                        </h1>
                    </NavLink>
                    </li>

                </div>
            </div>
        </div>

            )
}

            export default Navbar
