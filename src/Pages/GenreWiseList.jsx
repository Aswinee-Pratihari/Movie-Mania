import React, { useEffect, useState } from 'react'
import GenreButton from '../components/GenreButton'

const GenreWiseList = () => {

    const[genre,SetGenre]=useState([])
    // const handleGenre=async(id)=>{
    //     const url=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8&with_genres=&with_genres=${id}`
    //     const data=await fetch(url)
    //     const parsedata=await data.json()
    //     console.log(parsedata)
    //     SetGenre(parsedata.genres)
    // }
    const showgenre=async()=>{
        const url=`https://api.themoviedb.org/3/genre/movie/list?api_key=9ff95fa183de9020642f072e169a6970&language=en-US`
        const data=await fetch(url)
        const parsedata=await data.json()
        console.log(parsedata.genres)
        SetGenre(parsedata.genres)
    }
    useEffect(()=>{ 
        showgenre();
            },[])
            
  return (
    <>
    
    <div className=" grid gap-y-0 gap-x-3 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">

      {
          genre.map((item)=>{
           return <GenreButton name={item.name} item={item} handleGenre={(id)=>console.log(id)}/>
            })
        }
        </div>

        </>
  )
}

export default GenreWiseList
