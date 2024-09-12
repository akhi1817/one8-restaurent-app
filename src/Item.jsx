import React from 'react'

const Item = (props) => {
    console.log(props);
  return (
    <>
        <div className='card bg-white mt-3 text-center'>
            <div className='card-body'>
                <img src={props.img} className='img-fluid' style={{height:'250px'}} alt='product '/>
                <h1 className='text-secondary'>{props.name}</h1>
                <p className='text-success'>{props.desc}</p>
                <h3 className='text-danger'>{props.price}</h3>
            </div>
        </div>
    
    </>
  )
}

export default Item
