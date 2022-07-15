import React, { useEffect, useState } from 'react'

const GenreButton = ({name,handleGenre,item}) => {
    // const[genre,SetGenre]=useState([])
    // const showgenre=async()=>{
    //     const url=`https://api.themoviedb.org/3/genre/movie/list?api_key=9ff95fa183de9020642f072e169a6970&language=en-US`
    //     const data=await fetch(url)
    //     const parsedata=await data.json()
    //     console.log(parsedata.genres)
    //     SetGenre(parsedata.genres)
    // }
    // useEffect(()=>{ 
    //     showgenre();
    //         },[])
  return (
    <>
    {/* <div className=" grid gap-y-0 grid-cols-6">

      {
          genre.map((item)=>{
              return <button class="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded-lg text-lg">{item.name}</button>
            })
        }
        </div> */}



<button class="flex mx-auto mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-800 rounded-lg text-lg" onClick={()=>handleGenre(item.id)}>{name}</button>
      

    </>
  )
}

export default GenreButton
