import React from 'react'

const Events = () => {
  return (
    <>
    
    <div className='container-fluid p-5 mt-5'>
        <div className='row'>
        <h4 className='text-secondary text-center'>Events</h4>
        <h1 className='text-dark text-center'>Enjoy our <span className='text-danger'>Blissful Events</span></h1>
        <hr/>
             <div className='col-md-12 mt-2 p-3'>
             <div id="partyCarousel" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="party-card position-relative overflow-hidden">
        <img src="images/events-1.jpg" alt="Custom Parties" className="img-fluid" style={{width:'100%', height:'400px'}}/>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
          <h2 className="text-light text-start mt-5">Custom Parties</h2>
          <p className="price text-white">$99</p>
          <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="party-card position-relative overflow-hidden">
        <img src="images/events-4.jpg" alt="Wedding Parties" className="img-fluid" style={{width:'100%', height:'400px'}}/>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
          <h2 className="text-white text-start mt-5">Wedding Parties</h2>
          <p className="price text-white">$899</p>
          <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="party-card position-relative overflow-hidden">
        <img src="images/events-3.jpg" alt="Birthday Parties" className="img-fluid" style={{width:'100%', height:'400px'}}/>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
          <h2 className="text-white text-start mt-5">Birthday Parties</h2>
          <p className="price text-white">$289</p>
          <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="party-card position-relative overflow-hidden">
        <img src="images/events-2.jpg" alt="Private Parties" className="img-fluid" style={{width:'100%', height:'400px'}}/>
        <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 d-flex flex-column justify-content-center align-items-center text-center p-3">
          <h2 className="text-white text-start mt-5">Private Parties</h2>
          <p className="price text-white">$299</p>
          <p className="description text-white">Quo corporis voluptates ea ad. Consectetur inventore...</p>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Controls --> */}
  <button className="carousel-control-prev" type="button" data-bs-target="#partyCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#partyCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
               
            </div> 
        </div>
    </div>

    
    </>
  )
}

export default Events
