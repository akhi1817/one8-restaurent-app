import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>

                <nav className='navbar navbar-expand-lg bg-primary text-center text-warning fw-bold'>
                    <NavLink to='/' className='navbar-brand text-warning' >ONE8 Restaurent</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>  
                    <ul className='navbar-nav m-auto'>
                        <li className='nav-item px-3 '><NavLink to='/' className='nav-link text-light'>Home</NavLink></li>
                        <li className='nav-item px-3 '><NavLink to='/about'className='nav-link text-light'>About</NavLink></li>
                        <li className='nav-item px-3 '><NavLink to='/chef'className='nav-link text-light'>Chef</NavLink></li>
                        <li className='nav-item px-3 '><NavLink to='/menu'className='nav-link text-light'>Menu</NavLink></li>
                        <li className='nav-item px-3 '><NavLink to='/events'className='nav-link text-light'>Events</NavLink></li>
                        <li className='nav-item px-3 '><NavLink to='/contact'className='nav-link text-light'>Contact</NavLink></li>
                        <li className='nav-item px-3 ms-5 '><NavLink to='/tableform'className='nav-link text-light'><button className='btn btn-danger text-light rounded rounded-pill'>Book A Table</button></NavLink></li>
                        
                    </ul>
                </nav>
        </div>
    </div>
    </>
  )
}

export default Navbar
