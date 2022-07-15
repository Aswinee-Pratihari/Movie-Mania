import React, { useState } from 'react'
import video from "../marvel.mp4"
const Main = () => {
  
  return (
    <>
      <div className="flex items-end justify-center w-full h-screen text-center opacity-100 ">
      <video
   
        src={video}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute "
      />
    <div class="absolute top-100px right-0 bottom-0 left-0 w-full h-3/4 overflow-hidden bg-fixed opacity-50 bg-gray-900 "></div>
      <div className="content absolute w-full h-full flex flex-col justify-center items-center  ">
        <h1 className='text-4xl font-bold ... md:text-9xl text-white subpixel-antialiased ...  font-Volkorn '>MOVIE MANIA</h1>
        <p className='text-2xl font-bold ... text-white'>One Stop For Your Film Destination</p>
      </div>
      </div>  
    </>
  )
}

export default Main
