import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    
    <div className="container-fluid">
       <div className="row">
        <nav className="navbar navbar-expand-lg bg-primary">
           <div className="container-fluid">
              <NavLink to="/" className="navbar-brand text-warning fw-bold">ONE8 Restaurant</NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item px-3"><NavLink to="/" className="nav-link text-light">Home</NavLink></li>
            <li className="nav-item px-3"><NavLink to="/about" className="nav-link text-light">About</NavLink></li>
            <li className="nav-item px-3"><NavLink to="/chef" className="nav-link text-light">Chef</NavLink></li>
            <li className="nav-item px-3"><NavLink to="/menu" className="nav-link text-light">Menu</NavLink></li>
            <li className="nav-item px-3"><NavLink to="/events" className="nav-link text-light">Events</NavLink></li>
            <li className="nav-item px-3"><NavLink to="/contact" className="nav-link text-light">Contact</NavLink></li>
            <li className="nav-item px-3"><NavLink to="/tableform" className="nav-link"><button className="btn btn-dangern text-light rounded-pill">Book A Table</button></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>

    </>
  )
}

export default Navbar
