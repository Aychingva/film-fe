import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { getSingleList } from '../../services/save.services'
import { useState } from 'react'
import Moviecard from '../../companents/moviecards'

function Singlepage() {
    const [list,setlist]=useState({})
    const {id}=useParams()
    useEffect(()=>{
        getSingleList(id)
        .then(data=>setlist(data))
        .catch(err=>console.log(err))

    })
  return (
    <div className='container mx-[auto] mt-[40px]'>
     <div className='flex justify-between items-start'>  
    <h1 className='text-[30px] font-bold text-[#2411b4]'>{list.title}</h1>
    <a 
        href={`https://web.whatsapp.com/send?text=${location.href}`} 
        target="_blank" 
        rel="noopener noreferrer"
    >
        <img 
            src="https://yt3.googleusercontent.com/sgHvOYIO6-Qg_6UAMJK9bjMHzA3Nf5uneSMAmzUZuZrLqLttTdVwNXf0q5n2nBVecIZ_gsknCH0=s900-c-k-c0x00ffffff-no-rj" 
            className='w-[60px] rounded-full' 
            alt="Share on WhatsApp"
        />
    </a>
</div>

        <div className='grid grid-cols-4 mt-[4rem] gap-[15px]'>
            {list.movies?.map(movie=><Moviecard movie={movie} key={movie.imdbID}/>)}
        </div>

    </div>
  )
}

export default Singlepage