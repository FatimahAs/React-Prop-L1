import React from 'react';

function Product({name, price, description}) {
  return (
    <div className='product'>
      <h2>{name}</h2>
      <p className='description'>{description}</p>
      <p className='price'>${price}</p>
    </div>
  )
}

export default Product
