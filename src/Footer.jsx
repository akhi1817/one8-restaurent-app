import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='container-fluid mt-5'>
        <div className='row bg-dark text-white px-3'>
            <div className='col-md-12 d-flex'>
                <div className='col-md-3'>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className='col-md-3'>
                    <h3>Contact</h3>
                    <p><strong>Phone:</strong>+91 8199819283</p>
                    <p><strong>Email:</strong>restaurent18@gmail.com</p>
                </div>
                <div className='col-md-3'>
                    <h3>Opening Hours</h3>
                    <p><strong>Mon-Sat</strong>: 11AM -11PM; <strong>Sunday</strong>: Closed</p>
                </div>
                <div className='col-md-3'>
                    <h3>Follow Us</h3>
                    <i class='fa fa-whatsapp px-1'  style={{fontSize:'27px'}}></i>
                    <i class='fa fa-instagram px-1' style={{fontSize:'27px'}}></i>
                    <i class='fa fa-twitter px-1'   style={{fontSize:'27px'}}></i>
                    <i class='fa fa-facebook px-1'  style={{fontSize:'27px'}}></i>
                </div>
            </div>
            <hr/>
        </div>
    </div>
    </>
  )
}

export default Footer
