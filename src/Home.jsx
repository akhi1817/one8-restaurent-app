import React from 'react'
import About from './About'
import Chef from './Chef'
import Events from './Events'
import Contact from './Contact'
import Tableform from './Tableform'
import Menu from './Menu'

const Home = () => {
  return (
    <>
    <div className='container-fluid bg-light mt-5 '>
        <div className='row'>
            <div className='col-md-12 d-flex'>

            
            <div className='col-md-6 p-5'>
                <h1 className='text-dark'>Enjoy Your Healthy<br/>
                Delicious Food</h1>
                <h3 className='text-secondary'>We are team of talented designers making<br/> websites with Bootstrap</h3>
                <div className='d-flex'>
                    <button className='btn btn-danger text-light rounded-pill px-4 my-3'>Book A Table</button>
                    <p className='text-dark px-4 my-3'><i class="fa fa-play me-3"></i>
                    Watch Video</p>
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
