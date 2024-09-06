import React, { useState } from 'react'
import Item from './Item'

const Menu = () => {
    const[showstarter,setshowstarter]=useState(true);
    const[showbreakfast,setshowbreakfast]=useState(true);
    const[showlunch,setshowlunch]=useState(true);
    const[showdinner,setshowdinner]=useState(true);

// all products
    const showallProducts=()=>{
        setshowbreakfast(true);
        setshowstarter(true);
        setshowlunch(true);
        setshowdinner(true);
    }
    //starter items only 
    const showstarteritem=()=>{
        setshowbreakfast(false);
        setshowstarter(true);
        setshowlunch(false);
        setshowdinner(false);
    }
// breakfast items only
const showbreakfastitem=()=>{
    setshowbreakfast(true);
    setshowstarter(false);
    setshowlunch(false);
    setshowdinner(false);
}
// lunch items only
const showlunchitem=()=>{
    setshowbreakfast(false);
    setshowstarter(false);
    setshowlunch(true);
    setshowdinner(false);
}
// dinner items only
const showdinneritem=()=>{
    setshowbreakfast(false);
    setshowstarter(false);
    setshowlunch(false);
    setshowdinner(true);
}



    const starter=[
        {
            id:1,
            name:"Magnam Tiste",
            img:'images/menu/menu-item-1.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$4.85"
        },
        {
            id:2,
            name:"Aut Luia",
            img:'images/menu/menu-item-2.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$14.85"
        },
        {
            id:3,
            name:"Est Eligendi",
            img:'images/menu/menu-item-3.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$13.95"
        }

    ]
    const Breakfast=[
        {
            id:4,
            name:"Eos Luibusdam",
            img:'images/menu/menu-item-4.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$12.95"
        },
        {
            id:5,
            name:"Eos Luibusdam",
            img:'images/menu/menu-item-5.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$9.85"
        },
        {
            id:6,
            name:"Laboriosam Direva",
            img:'images/menu/menu-item-6.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$19.85"
        },

    ]

    const Lunch=[
        {
            id:2,
            name:"Aut Luia",
            img:'images/menu/menu-item-2.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$14.85"
        },
        {
            id:4,
            name:"Eos Luibusdam",
            img:'images/menu/menu-item-4.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$12.95"
        },
        {
            id:6,
            name:"Laboriosam Direva",
            img:'images/menu/menu-item-6.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$19.85"
        }
    ]
    const Dinner=[
        {
            id:1,
            name:"Magnam Tiste",
            img:'images/menu/menu-item-1.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$4.85"
        },
        {
            id:3,
            name:"Est Eligendi",
            img:'images/menu/menu-item-3.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$13.95"
        },
        {
            id:5,
            name:"Eos Luibusdam",
            img:'images/menu/menu-item-5.png',
            desc:"Lorem, deren, trataro, filede, nerada",
            price:"$9.85"
        }

        
    ]
  return (
    <>
    
    <div className="container-fluid mt-5">
        <div className='row px-3 mt-3'>
        <h4 className='text-secondary text-center'>Our Menu</h4>
        <h1 className='text-dark text-center mb-5'>Check Our <span className='text-danger'>Yummy Menu</span></h1>
        <hr/>
            <div className='col-md-12 p-3'>
                <div className='col-md-12 text-center'>
                <button className='btn btn-danger px-3 mx-3' onClick={()=>showallProducts()}>All Items</button>
                <button className='btn btn-success px-3 mx-3'onClick={()=>showstarteritem()}>Starter</button>
                <button className='btn btn-primary px-3 mx-3' onClick={()=>showbreakfastitem()}>Breakfast</button>
                <button className='btn btn-secondary px-3 mx-3' onClick={()=>showlunchitem()}>Lunch</button>
                <button className='btn btn-warning px-3 mx-3' onClick={()=>showdinneritem()}>Dinner</button>
                </div>  
               <div className='row px-5'>
                {
                    

                    
                    showstarter ?
                    starter.map((val)=>{
                        return(
                            <div className='col-md-4'>
                                <Item
                                img={val.img}
                                name={val.name}
                                desc={val.desc}
                                price={val.price}
                                />

                            </div>
                        )
                    }):null
                
                }
                {
                    showbreakfast ?
                    Breakfast.map((val)=>{
                        return(
                            <div className='col-md-4'>
                                <Item
                                img={val.img}
                                name={val.name}
                                desc={val.desc}
                                price={val.price}
                                />

                            </div>
                        )
                    }):null
                }
                {
                    showlunch ?
                    Lunch.map((val)=>{
                        return(
                            <div className='col-md-4'>
                                <Item
                                img={val.img}
                                name={val.name}
                                desc={val.desc}
                                price={val.price}
                                />

                            </div>
                        )
                    })
                    :null
                }
                {
                    showdinner ?
                    Dinner.map((val)=>{
                        return(
                            <div className='col-md-4'>
                                <Item
                                img={val.img}
                                name={val.name}
                                desc={val.desc}
                                price={val.price}
                                />

                            </div>
                        )
                    }):null
                }
               </div>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-5">
        <div className='row px-3 mt-3'>
        <h4 className='text-secondary text-center'>Testimonials</h4>
        <h1 className='text-dark text-center mb-5'>What Are They <span className='text-danger'>Saying About Us</span></h1>
        <hr/>

                <div className='col-md-12 justify-content-center align-item-center mt-3 '>
                    <div className='row p-3 '>
                        <div className='col-md-6 mt-4'>
                            <div className='card'>
                                <div className='card-body d-flex bg-primary text-white'>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloribus repellendus perferendis ut natus voluptas vero minima sapiente sint in.</p>
                                        <h5>Sara Wilson</h5>
                                        <h6>Designer</h6>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        
                                    </div>
                                    <div>
                                        <img src='images/testimonials/testimonials-2.jpg' alt='testimonials' className='img-fluid rounded rounded-circle w-75 h-75'/>                        
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='card'>
                                <div className='card-body d-flex bg-primary text-white'>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloribus repellendus perferendis ut natus voluptas vero minima sapiente sint in.</p>
                                        <h5>Saul Goodman</h5>
                                        <h6>CEO and Founder</h6>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        
                                    </div>
                                    <div>
                                        <img src='images/testimonials/testimonials-1.jpg' alt='testimonials' className='img-fluid rounded rounded-circle w-75 h-75'/>                        
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='card'>
                                <div className='card-body d-flex bg-primary text-white'>
                                    <div>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloribus repellendus perferendis ut natus voluptas vero minima sapiente sint in.</p>
                                        <h5>Jena Karlis</h5>
                                        <h6>Store Owner</h6>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        
                                    </div>
                                    <div>
                                        <img src='images/testimonials/testimonials-3.jpg' alt='testimonials' className='img-fluid rounded rounded-circle w-75 h-75'/>                        
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='card'>
                                <div className='card-body d-flex bg-primary text-white'>
                                    <div>
                                        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum doloribus repellendus perferendis ut natus voluptas vero minima sapiente sint in.</p>
                                        <h5>John Larson</h5>
                                        <h6>Entrepreneur</h6>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        <i className='fa fa-star text-warning '></i>
                                        
                                    </div>
                                    <div>
                                        <img src='images/testimonials/testimonials-4.jpg' alt='testimonials' className='img-fluid rounded rounded-circle w-75 h-75'/>                        
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

export default Menu
