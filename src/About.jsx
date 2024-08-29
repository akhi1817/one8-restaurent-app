import React from 'react'

const About = () => {
  return (
    <>
    <div className='container-fluid mt-5'>
        <div className='row'>
        <div className='col-md-12 mt-5'>
            <h4 className='text-secondary text-center'>About Us</h4>
            <h1 className='text-dark text-center'>Learn More About Us</h1>
            <hr/>
                <div className='col-md-12 d-flex flex-direction-wrap'>
                    <div className='col-md-6 ms-5 mt-3'>
                        <img src='images/about.jpg' className='img-fluid' style={{width:'600px', height:'400px'}} />
                    </div>
                    <div className='col-md-6 mt-3'>
                        <p className='text-secondary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore <br/>magna aliqua.</p>
                        <p className='text-dark'>&#9989;Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p className='text-dark'>&#9989; Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                        <p className='text-dark'>&#9989;Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className='col-md-12 d-flex flex-direction-wrap-reverse mt-3'>
                    <div className='col-md-6 ms-5 mt-3 px-5 mx-3'>
                        <div className='col-md-6 border border-4 border-secondary text-center px-3 mx-3 '>
                          <h3 className='text-dark'>Book A Table</h3> 
                          <h2 className='text-danger'>+91 8177819283</h2>
                        </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                        <img src='images/about-2.jpg' className='img-fluid' style={{width:'500px', height:'300px'}}/>
                    </div>
                </div>
                {/* testimonials */}
            
               
               
        </div>
        </div>
    </div>
    </>
  )
}

export default About
