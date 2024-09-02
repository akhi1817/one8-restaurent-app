import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import Chef from './Chef'
import Menu from './Menu'
import Events from './Events'
import Contact from './Contact'
import Tableform from './Tableform'

const App_Layout = () => {
  return (
    <>
    
    <Navbar/>
    <Home/>
    <About/>
    <Chef/>
    <Menu/>
    <Events/>
    <Contact/>
    <Tableform/>
    <Outlet/>
    <Footer/>   
    </>
  )
}

export default App_Layout
