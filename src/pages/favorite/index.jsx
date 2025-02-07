import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Moviecard from '../../companents/moviecards'
import { saveList } from '../../services/save.services'

function Favorite() {
  const{favlist}=useSelector(state=>state)
  const title=useRef(null)
  const [mylist,setmylist]=useState([])
  const formsubmit=(e)=>{
    e.preventDefault()
    let localdata=JSON.parse(localStorage.getItem("mylist"))
    saveList({
      title:title.current.value,
      movies:favlist
    }).then(res=>{
      localdata? localStorage.setItem("mylist",JSON.stringify([...localdata,res]))
      : localStorage.setItem("mylist",JSON.stringify([res]))
      alert("save list")
    
    })
    .catch(err=>console.log("error",err))
  }

  return (
    <div className='container mx-[auto]'>
      <form className='mt-[4rem] flex gap-[20px]' onSubmit={formsubmit}>
        <input type="text" placeholder='list title'  ref={title} className='border-[2px] block rounded-sm outline-none w-[80%] px-[30px]'/>
        <button className='bg-[#354abc] px-[20px] py-[6px] text-[#fff] w-[20%]'>Save</button>
      </form>
      <div className='grid grid-cols-4 mt-[4rem] gap-[15px]'>
      {
        favlist.length? favlist.map(movie=><Moviecard key={movie.imdbID}movie={movie}/>):null
      }
      </div>
     
    </div>
  )
}

export default Favorite