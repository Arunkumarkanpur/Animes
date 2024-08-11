import React from 'react'

import hanma from "../../public/hanma.jpg"
import berserk from "../../public/Berserk.jpg"
import Beyblade from "../../public/Beyblade.jpg"
import Black from "../../public/Black.jpg"
import Death from "../../public/Death.jpg"
import Demon from "../../public/Demon.webp"
import Dororo from "../../public/Dororo.jpg"
import Heavenly from "../../public/Heavenly.jpg"
import Hells from "../../public/Hells.jpg"
import Jujutsu from "../../public/Jujutsu.jpg"
import One from "../../public/One.jpg"
import Vinland from "../../public/Vinland.jpg"

function About() {

const cardItem = [
    {
        id: 1,
        logo: hanma,
        name: "Baki Hanma"
    },
    {
        id: 2,
        logo: berserk,
        name: "Berserk"
    },
    {
        id: 3,
        logo: Beyblade,
        name: "Beyblade"
    },
    {
        id: 1,
        logo: Black,
        name: "Black Clover"
    },
    {
        id: 4,
        logo: Death,
        name: "Death Note"
    },
    {
        id: 5,
        logo: Demon,
        name: "Demon Slayer"
    },
    {
        id: 6,
        logo: Dororo,
        name: "Dororo"
    },
    {
        id: 7,
        logo: Heavenly,
        name: "Heavenly Delusions"
    },
    {
        id: 8,
        logo: Hells,
        name: "Hell's Paradise"
    },
    {
        id: 9,
        logo: Jujutsu,
        name: "Jujutsu Kaisen"
    },
    {
        id: 10,
        logo: One,
        name: "One Punch Man"
    },
    {
        id: 11,
        logo: Vinland ,
        name: "Vinland Saga"
    },


]

return (
    <> 
    <div className='max-w-screen-2xl container mx-auto px-7 md:px-20px'>
    
    <div>
    <h1 className='text-3xl font-bold text-center justify-center '> <br /> Most Favourite Animes</h1>
    

    <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
{
cardItem.map(({id,logo,name}) =>(
<div className='flex flex-col items-center justify-center rounded-md p-1 mt-7 cursor-pointer hover:scale-105 duration-300 gap-2' key={id}>
  <img className='w-[250px] h-[250px] p-1 rounded-2xl' src={logo} alt="" />
<div>
    <div className='font-bold text-xl px-2 mb-2'>{name}</div>

</div>

</div>
))
}

    </div>
    </div>
</div>

    </>
  )
}

export default About
