import React from 'react'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
    
        <div className='container-fluid mt-5'>
            <div className='row bg-dark text-white px-3 py-4'>
                <div className='col-md-12 d-flex flex-wrap justify-content-between'>
                    <div className='col-md-3 mb-3'>
                        <h3 className='text-warning'>Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <h3 className='text-warning'>Contact</h3>
                        <p><strong>Phone:</strong> +91 8199819283</p>
                        <p><strong>Email:</strong> restaurent18@gmail.com</p>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <h3 className='text-warning'>Opening Hours</h3>
                        <p><strong>Mon-Sat</strong>: 11AM - 11PM; <strong>Sunday</strong>: Closed</p>
                    </div>
                    <div className='col-md-3 mb-3'>
                        <h3 className='text-warning'>Follow Us</h3>
                        <div className='d-flex'>
                            <Link to='https://wa.link/a3gstj' className='text-success fs-4 px-3'><i class="bi bi-whatsapp"></i></Link>
                            <Link to='https://www.facebook.com/' className='text-primary fs-4 px-3'><i class="bi bi-facebook"></i></Link>
                            <Link to='https://x.com/' className='text-white fs-4 px-3'><i class="bi bi-twitter-x"></i></Link>
                            <Link to='https://www.instagram.com/' className='text-danger fs-4 px-3'><i class="bi bi-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        </div>

    </>
  )
}

export default Footer
// to='https://wa.link/amevk3'
// to='https://x.com/'
// to='https://www.instagram.com/'
// to='https://www.facebook.com/'