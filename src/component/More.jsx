import React from 'react'

function More() {
  return (
    <>
     <div lassName='max-w-screen-2xl container mx-auto px-7 md:px-20px bg-gray-700'>
        <div className='bg-gray-400 pt-12 h-[400px] mt-12'>
        <h1 className='flex text-center justify-center pt-[50px] text-3xl p-5'>I Put Faith In My Own Convictions As To <br />What I Believe Is Right, And Consider Them To Be Righteous.</h1>
        <h2 className='font-bold text-end px-12 text-xl mt-12'>-Near (Death Note)</h2>
    </div>
    <hr /><hr /><hr />


    <div className='h-[200px]'>

        <div className='h-[200px] bg-gray-800 flex flex-col md:flex-row justify-center md:justify-center space-x-5 p-5 md:p-12 mt-12 mx-2 md:mx-20 rounded-2xl'>
            <div className='mx-5 md:mx-0'>
                <h1 className='font-bold text-3xl text-white'>Want your animes?</h1>
                <p className='text-white'>Fill up the form to get your animes listed!</p>
            </div>

            <div className='p-5'>
                <button className='p-1 rounded-2xl text-white bg-gray-500 hover:scale-105 md:hover-scale-100 duration-200 hover:bg-gray-400 hover:text-black mx-16 font-semibold px-5'>Request</button>
            </div>
        </div>

    </div>




    </div>
    </>
)
}

export default More
