import React from 'react'

const Item = (props) => {
    console.log(props);
  return (
    <>
        <div className='card bg-white mt-3 text-center'>
            <div className='card-body'>
                <img src={props.img} className='img-fluid' style={{height:'250px'}}/>
                <h1 className='text-dark'>{props.name}</h1>
                <p className='text-secondary'>{props.desc}</p>
                <h3 className='text-danger'>{props.price}</h3>
            </div>
        </div>
    
    </>
  )
}

export default Item
