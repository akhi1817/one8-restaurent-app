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
        <h1 className='text-dark text-center'>Check Our Yummy Menu</h1>
        <hr/>
            <div className='col-md-12'>
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
                    showdinner &&
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
                    })
                }
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Menu
