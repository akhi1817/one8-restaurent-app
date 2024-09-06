import React from 'react'
import About from './About'
import Chef from './Chef'
import Events from './Events'
import Contact from './Contact'
import Tableform from './Tableform'
import Menu from './Menu'
import { Link, NavLink } from 'react-router-dom';


const Home = () => {

  

  return (
    <>
    <div className='container-fluid bg-light mt-5 '>
        <div className='row'>
            <div className='col-md-12 d-flex'>

            
            <div className='col-md-6 p-5'>
                <h1 data-aos="fade-up" className='text-dark'>Enjoy Your Healthy<br/>
                <span className='text-danger'>Delicious Food</span></h1>
                <h3 className='text-secondary'>We are team of talented designers making<br/> websites with Bootstrap</h3>
                <div className='d-flex px-3 mt-5'>
                    <button className='btn btn-danger text-light rounded-pill mx-3'><NavLink to='/tableform' className='text-light nav-link'>Book A Table</NavLink></button>
                    <button className='btn btn-outline-success rounded-pill mx-3'><Link className='link text-decoration-none text-dark' to='https://youtu.be/_dui6BUmMBg?si=ym-YR74k0FmQLycO'><i class="fa fa-play me-3"></i>Watch Video</Link></button>
                </div>
            </div>
            <div className='col-md-6 ms-5'>
                <img src='images/hero-img.png' className='img-fluid' style={{width:'400px',height:'400px'}}/>
            </div>
            </div>
        </div>
    </div>
    <About/>
    <Menu/>
    <Chef/>
    <Events/>
    <Contact/>
    <Tableform/>
    </>
  )
}

export default Home
