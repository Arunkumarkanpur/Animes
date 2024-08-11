
import React, { useState } from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from 'react-scroll';

function Navbar() {
    const [menu,setMenu] = useState(false);
    const navItem = [
        {
            id: 1,
            text:"Animes"
        },
        {
            id: 2,
            text:"About-us"
        },
        {
            id: 3,
            text:"Join-us"
        },
    

    ]
return (

    <div className='max-w-screen-2xl container mx-auto px-7 md:px-20px h-16 bg-gray-800'>

    <div className='flex justify-between items-center h-16'>
        <div className='text-white  text-xl font-semibold'>
            <h1>Anime Town</h1>
        </div>

         {/* desktop  */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                {
                    navItem.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 text-white cursor-pointer' key={id}>
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                            {text}
                            </Link>
                            
                            </li>
                    ))
                }
                </ul>
                <div className='md:hidden text-white' onClick={() =>setMenu(!menu)}>{menu?<IoCloseSharp size={24}/>:<TfiMenuAlt size={24}  />}</div>

            </div>
        </div>
        {/* mobile navbar  */}
        {
            menu && (
                <div className='h-80 text-blue-400 rounded-md'>

                <ul className='bg-gray-800 md:hidden flex flex-col h-screen items-end text-xl'>
                {
                    navItem.map(({id,text}) =>(
                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                            <Link onClick={() =>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'>
                            {text}
                            </Link>
                            </li>
                    ))
                }
                </ul>
        </div>
            )
        }
        
    </div>


  )
}

export default Navbar
