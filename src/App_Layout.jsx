import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const App_Layout = () => {
  return (
    <>
    
    <Navbar/>
    <Outlet/>
    <Footer/>   
    </>
  )
}

export default App_Layout
