import React from 'react'

const Events = () => {
  return (
    <>
    
    <div className='container-fluid p-5 mt-5'>
        <div className='row'>
        <h4 className='text-secondary text-center'>Events</h4>
        <h1 className='text-dark text-center'>Enjoy our Blissful Events</h1>
        <hr/>
             <div className='col-md-12 mt-2 p-3 d-flex'>
                <div className='col-md-3 mt-5 border border-1'>
                <div className="party-card position-relative overflow-hidden">
            <img src="images/events-1.jpg" alt="Custom Parties" className="img-fluid"  style={{width:'500px',height:'400px'}}/>
            <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
              <h2 className="text-light text-start mt-5">Custom Parties</h2>
              <p className="price text-white">$99</p>
              <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
            </div>
          </div>
                </div>
                <div className='col-md-3 mt-5 border border-1'>
                <div className="party-card position-relative overflow-hidden">
                    <img src="images/events-4.jpg" alt="Custom Parties" className="img-fluid"  style={{width:'500px',height:'400px'}}/>
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h2 className="text-white text-start mt-5">Wedding Parties</h2>
                      <p className="price text-white">$899</p>
                      <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
                    </div>
                </div>
                </div>
                <div className='col-md-3 mt-5 border border-1'>
                <div className="party-card position-relative overflow-hidden">
                    <img src="images/events-3.jpg" alt="Custom Parties" className="img-fluid"  style={{width:'500px',height:'400px'}}/>
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h2 className="text-white text-start mt-5">Birthday Parties</h2>
                      <p className="price text-white">$289</p>
                      <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
                    </div>
                </div>
                </div>
                <div className='col-md-3 mt-5 border border-1'>
                <div className="party-card position-relative overflow-hidden">
                    <img src="images/events-2.jpg" alt="Custom Parties" className="img-fluid"  style={{width:'500px',height:'400px'}}/>
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
                      <h2 className="text-white text-start mt-5">Private Parties</h2>
                      <p className="price text-white">$299</p>
                      <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
                    </div>
                </div>
                </div>
            </div> 
        </div>
    </div>

    
    </>
  )
}

export default Events
