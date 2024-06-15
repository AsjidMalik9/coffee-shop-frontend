import React, { useContext } from 'react'
import { CartContext } from '../../../cartContext';
import { useEffect } from 'react'

export default function Deal(props) {
  const { addToCart } = useContext(CartContext);
  useEffect(()=>{
    debugger;
  }, []);

  return (
    <div className='col-3'>
      <div className='card mt-3'>
        <div className='card-header d-flex'>
          <h3>{props.deal.attributes.name}</h3>
        </div>
        <h5 className='text-center m-3'>{props.deal.attributes.description}</h5>
        <div className='card-body'>
          <div>
            <h5>Start Date:</h5>  {props.deal.attributes.start_date} 
            <h5>End Date:</h5>  {props.deal.attributes.end_date} 
          </div>
          <p>
          </p>
          <div className='d-flex'>
            <p>Total Price: {props.deal.attributes.total_price}</p>
            <button className='ml-auto btn btn-primary' onClick={()=> addToCart(props.deal)}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
