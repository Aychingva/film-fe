import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function List() {
  const [mylist,setmylist]=useState([])
  useEffect(()=>{
    let localdata=JSON.parse(localStorage.getItem("mylist"))
    console.log(localdata)
    if(localdata){
      setmylist(localdata)
    }
  },[])
  const deletelist=(id)=>{
    localStorage.setItem("mylist",JSON.stringify( mylist.filter(list=>list.id!==id)))
    setmylist(mylist.filter(list=>list.id!==id))

  }
  console.log(mylist)
  return (
    <div className='container mx-[auto] mt-[40px]'>
      {
        mylist.map((list)=><div className='bg-[#fff] border-[3px] bbbb-lg px-[30px] py-[10px] flex justify-between mb-[20px]'><Link to={`/list/${list.id}`}>{list.title}</Link>
        <button className='bg-[#f31515] py-[6px] px-[30px] text-[#fff]' onClick={()=>deletelist(list.id)} > delete</button>
        </div>)
      }
      
    </div>
  )
}

export default List