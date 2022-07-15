import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const TrendingMovieList = () => {
    const[movie,Setmovie]=useState([]);
const showmovie=async()=>{
const url=`https://api.themoviedb.org/3/trending/movie/week?api_key=9ff95fa183de9020642f072e169a6970&page=1`
const data=await fetch(url)
const parsedata=await data.json()
// console.log(parsedata.results)
Setmovie(parsedata.results)
}
    useEffect(()=>{
showmovie()
    },[])
  return (
    <div className='container px-5 py-24 mx-auto '>
        <h3 className='text-center md:text-start md:text-3xl text-2xl font-bold my-5'>Trending Movies of the week</h3>
<div class="flex flex-wrap justify-center">

{
    movie.map((item)=>{
      return <div class="lg:w-1/4 md:w-1/2 p-4 w-full lg:mx-3 my-3 justify-center drop-shadow-lg ... bg-white">
          <Link to={`/movies/${item.id}`}>
        <a class="block relative h-68 rounded overflow-hidden ">
          <img alt="ecommerce" class=" w-full h-full block relative" src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}/>

        </a>
        <div class="mt-4">
          <h3 class="text-gray-900 text-xs tracking-widest title-font mb-1">Popularity {item.popularity}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium my-4">{item.title}</h2>
          <h2 class="inline ml-auto mx-auto text-white bg-red-700 border-0 py-2 px-6 focus:outline-none  rounded ">{item.vote_average}</h2>
        </div>
        </Link>
      </div>
    })
}




    
     
        </div>
    </div>
      
  
  )
}

export default TrendingMovieList
