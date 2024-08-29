import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Tableform from './Tableform';
import Navbar from './Navbar';
import Chef from './Chef';
import Events from './Events';
import Contactdata from './Contactdata';
import Tabledata from './Tabledata';
import Footer from './Footer';
import Menu from './Menu';

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/tableform' element={<Tableform/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/chef' element={<Chef/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/contactdata' element={<Contactdata/>}/>
        <Route path='/tabledata' element={<Tabledata/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
     <Footer/>
    </Router>
    </>
  )
}

export default App
