import React from 'react'
import About from './About'
import Chef from './Chef'
import Events from './Events'
import Contact from './Contact'
import Tableform from './Tableform'
import Menu from './Menu'
import { Link, NavLink } from 'react-router-dom';
import './App.css';


const Home = () => {

  

  return (
    <>
  
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-12 d-flex flex-column flex-md-row align-items-center">
                <div className="col-12 col-md-6 p-5">
                    <h1 data-aos="fade-down" className="text-dark">Enjoy Your Healthy<br /><span className="text-success">Delicious Food</span></h1>
                    <h3 data-aos="fade-down" className="text-secondary">We are a team of talented designers making <br />  websites with Bootstrap</h3>
                    <div data-aos="fade-up" className="d-flex flex-column flex-sm-row px-3 mt-5">
                      <button className="btn btn-success text-light fw-bold rounded-pill mx-3 mb-3 mb-sm-0"><Link to="/tableform" className="text-light nav-link">Book A Table</Link>
                      </button>
                      <button className="btn btn-outline-danger rounded-pill fw-bold  mx-3">
                        <Link className="link text-decoration-none text-warning" to="https://youtu.be/_dui6BUmMBg?si=ym-YR74k0FmQLycO"><i className="fa fa-play me-3"></i>Watch Video</Link>
                      </button>
                    </div>
                </div>
                <div data-aos="flip-right" className="col-12 col-md-6 mt-4 mt-md-0 text-center">
                    <img src="images/hero-img.png" className="img-fluid float-animation" style={{ width: "400px", height: "400px" }} alt="Delicious Food"/>
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
