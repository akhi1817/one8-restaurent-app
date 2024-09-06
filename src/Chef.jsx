import React from 'react'

const Chef = () => {
  return (
   <>
   <div className='container-fluid mt-5'>
    <div className='row mt-5'>
    <h4 className='text-secondary text-center'>Chefs</h4>
    <h1 className='text-dark text-center'>Our Professional<span className='text-danger'> Chefs</span></h1>
    <hr/>
        <div className='col-md-12 mt-3 d-flex'>
            <div className='col-md-4 col-sm-12 p-3 my-3'>
                <div className='card '>
                    <div className='card-body text-center'>
                        <img src='images/chefs/chefs-1.jpg' className='img-fluid rounded rounded-circle' style={{width:'300px', height:'300px'}}/>
                    </div>
                    <div className='card-footer text-center'>
                        <h3 className='text-dark'>Walter White</h3>
                        <h5 className='text-warning'>Master Chef</h5>
                        <p className='text-dark'>Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.</p>
                        <h3 className='d-flex justify-content-center align-items-center '><i class="fa fa-facebook rounded px-2 text-primary"></i><i class="fa fa-whatsapp rounded px-2 text-success"></i><i class="fa fa-twitter text-primary rounded px-2"></i><i class="fa fa-instagram text-danger rounded px-2"></i></h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12 p-3 my-3'>
                <div className='card'>
                    <div className='card-body text-center'>
                        <img src='images/chefs/chefs-2.jpg' className='img-fluid rounded rounded-circle' style={{width:'300px', height:'300px'}}/>
                    </div>
                    <div className='card-footer text-center'>
                        <h3 className='text-dark'>Sarah Johnson</h3>
                        <h5 className='text-warning'>Pattisier</h5>
                        <p className='text-dark'>Quo esse repellendus quia id. Est eum et accusantium pariatur fugit nihil minima suscipit corporis. Voluptate sed quas reiciendis animi neque</p>
                        <h3 className='d-flex justify-content-center align-items-center '><i class="fa fa-facebook text-primary rounded px-2"></i><i class="fa fa-whatsapp text-success rounded px-2"></i><i class="fa fa-twitter text-primary rounded px-2"></i><i class="fa fa-instagram text-danger rounded px-2"></i></h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 col-sm-12 p-3 my-3'>
                <div className='card'>
                    <div className='card-body text-center'>
                        <img src='images/chefs/chefs-3.jpg' className='img-fluid rounded rounded-circle' style={{width:'300px', height:'300px'}}/>
                    </div>
                    <div className='card-footer text-center'>
                        <h3 className='text-dark'>William Anderson</h3>
                        <h5 className='text-warning'>Cook</h5>
                        <p className='text-dark'>Vero omnis enim consequatur. Voluptas consectetur unde qui molestiae deserunt. Voluptates enim aut architecto porro aspernatur molestiae modi</p>
                        <h3 className='d-flex justify-content-center align-items-center '><i class="fa fa-facebook text-primary rounded px-2"></i><i class="fa fa-whatsapp text-success rounded px-2"></i><i class="fa fa-twitter text-primary rounded px-2"></i><i class="fa fa-instagram text-danger rounded px-2"></i></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
   
   </>
  )
}

export default Chef
