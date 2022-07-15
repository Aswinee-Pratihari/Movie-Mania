import React from 'react'
import video from "../marvel.mp4"
import '../font styles/font.css'
import Main from '../components/Main'
import TrendingMovieList from '../components/TrendingMovieList'
import TrendingTvList from '../components/TrendingTvList'
const Hero = () => {
  return (
   <>
     <Main/>
     <TrendingMovieList/>
     <TrendingTvList/>
    </>
  )
}

export default Hero
