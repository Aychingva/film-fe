import React, { useState } from 'react'
import { useEffect } from 'react'
import { getmoviesSearch } from '../../services/movies-services'
import Moviecard from '../moviecards'
import { useSelector } from 'react-redux'

function Movies() {
   const {movies}=useSelector(state=>state)
  return (
    <div className='grid grid-cols-4 mt-[4rem] gap-[15px]'>
        {
            movies.length? movies.map(movie=><Moviecard movie={movie} key={movie.imdbID}/>) :<p>movie not found</p>
        }
    </div>
  )
}

export default Movies