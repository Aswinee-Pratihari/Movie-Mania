import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cast from '../components/MovieDetailsComponent/Cast'
import Overview from '../components/MovieDetailsComponent/Overview'

const MovieDetail = () => {
    const {id}=useParams()
  return (
    <>
      <Overview id={id}/>
      <Cast id={id}/>
    </>
  )
}

export default MovieDetail

