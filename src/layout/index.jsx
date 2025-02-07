import React from 'react'
import Navbar from './navbar'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout