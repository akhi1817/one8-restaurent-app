import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Admin = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        <nav className='navbar navbar-expand-lg bg-dark text-center text-warning fw-bold'>
                    <NavLink to='/' className='navbar-brand text-warning' >Admin Panel</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span></button>  
                    <ul className='navbar-nav m-auto'>
                        <li className='nav-item px-3 '><NavLink to='/contactdata' className='nav-link text-light'>Contact Data</NavLink></li>
                        <li className='nav-item px-3 '><NavLink to='/tabledata'className='nav-link text-light'>Booking Data</NavLink></li>
                          
                    </ul>
                </nav> 
        
        </div>
    </div>
    

    </>


  )
}

export default Admin
