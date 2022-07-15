import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const Overview = ({id}) => {

    // const {id}=useParams()
const[details,Setdetails]=useState([])
    const showmovies=async()=>{
        const url=`https://api.themoviedb.org/3/movie/${id}?api_key=9ff95fa183de9020642f072e169a6970&language=en-US`
        const data=await fetch(url)
        const parsedata=await data.json()
        // console.log(parsedata)
Setdetails(parsedata)
    }
    useEffect(()=>{
showmovies()
    },[])
  return (
    <>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-5 md:py-24 md:flex-row  flex-col-reverse items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{details.original_title}
        {/* <br class="hidden lg:inline-block">readymade gluten */}
      </h1>
   
      <p class="mb-8 leading-relaxed">{details.overview}.</p>
      <div class="flex justify-center">
        <span class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</span>
        <button class="ml-4 inline-flex font-bold text-white bg-red-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg">Rating {details.vote_average}</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`}/>
    </div>
  </div>
</section>
    </>
  )
}

export default Overview
