import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Credits = () => {
    const {id}=useParams()
const[work,SetWork]=useState([])
    const showwork=async()=>{
const url=`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=9ff95fa183de9020642f072e169a6970&language=en-US`
const data=await fetch(url)
const parsedata=await data.json()
console.log(parsedata.cast)
SetWork(parsedata.cast)

    }
    useEffect(()=>{
showwork();
    },[])
  return (
    <>
   <div class="flex flex-wrap justify-center">

{ 
work.map((item)=>{
        if (item.poster_path!=null &&item.original_title!=null) {
            
      return      <div class="lg:w-1/6 md:w-1/2 p-4 w-1/3 lg:mx-3 my-3 justify-center drop-shadow-lg ... bg-white">
          {/* <Link to={`/credit/${item.id}`}> */}
         <a class="block relative h-48 rounded overflow-hidden ">
          <img alt="ecommerce" class=" w-full h-full block relative" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>

        </a> 
        <div class="mt-4">
          <h3 class="text-gray-900 text-xs tracking-widest title-font mb-1">Popularity {item.popularity}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium my-4">{item.original_title}</h2>
          {/* <h2 class="block  text-black  border-0   focus:outline-none  rounded ">{item.character}</h2> */}
        </div> 
        {/* </Link> */}
   </div>
        
        }
    })
}




    
     
        </div>
    </>
  )
}

export default Credits
