import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Info from '../Info'

const SharedLayout = () => {
  return (
    <div className=''>
        <Navbar />
        <Outlet />
        <Info />
        <Footer />

    </div>
  )
}

export default SharedLayout