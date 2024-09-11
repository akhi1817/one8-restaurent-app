import React from 'react'

const Chef = () => {
  return (
   <>
  
   <div className="container-fluid mt-5 bg-light">
        <div className="row mt-5">
            <h4 className="text-secondary text-center">Chefs</h4>
            <h1 className="text-dark text-center">Our Professional<span className="text-danger"> Chefs</span></h1>
            <hr />
        <div className="col-md-12 mt-3">
            <div className="row gx-3 gy-4">
                <div className="col-md-4 col-sm-12">
                    <div className="card">
                        <div className="card-body text-center">
                            <img src="images/chefs/chefs-1.jpg" className="img-fluid rounded-circle" style={{ width: "80%", height: "auto" }} alt="Chef Walter White" />
                        </div>
                        <div className="card-footer text-center">
                            <h3 className="text-dark">Walter White</h3>
                            <h5 className="text-warning">Master Chef</h5>
                            <p className="text-dark"> Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate. </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="bi bi-whatsapp fs-3 text-success px-3"></i>
                                <i className="bi bi-facebook fs-3 text-primary px-3"></i>
                                <i className="bi bi-twitter-x fs-3 text-dark px-3"></i>
                                <i className="bi bi-instagram fs-3 text-danger px-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                <div className="card">
                    <div className="card-body text-center">
                        <img src="images/chefs/chefs-2.jpg" className="img-fluid rounded-circle" style={{ width: "80%", height: "auto" }} alt="Chef Sarah Johnson" />
                    </div>
                    <div className="card-footer text-center">
                        <h3 className="text-dark">Sarah Johnson</h3>
                        <h5 className="text-warning">Pattisier</h5>
                        <p className="text-dark">Quo esse repellendus quia id. Est eum et accusantium pariaturfugit nihil minima suscipit corporis. Voluptate sed quasreiciendis animi neque.</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="bi bi-whatsapp fs-3 text-success px-3"></i>
                            <i className="bi bi-facebook fs-3 text-primary px-3"></i>
                            <i className="bi bi-twitter-x fs-3 text-dark px-3"></i>
                            <i className="bi bi-instagram fs-3 text-danger px-3"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="card">
                    <div className="card-body text-center">
                        <img src="images/chefs/chefs-3.jpg" className="img-fluid rounded-circle" style={{ width: "80%", height: "auto" }} alt="Chef William Anderson" />
                    </div>
                    <div className="card-footer text-center">
                        <h3 className="text-dark">William Anderson</h3>
                        <h5 className="text-warning">Cook</h5>
                        <p className="text-dark">Vero omnis enim consequatur. Voluptas consectetur unde quimolestiae deserunt. Voluptates enim aut architecto porroaspernatur molestiae modi.</p>
                        <div className="d-flex justify-content-center align-items-center">
                          <i className="bi bi-whatsapp fs-3 text-success px-3"></i>
                          <i className="bi bi-facebook fs-3 text-primary px-3"></i>
                          <i className="bi bi-twitter-x fs-3 text-dark px-3"></i>
                          <i className="bi bi-instagram fs-3 text-danger px-3"></i>
                        </div>
                    </div>
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
