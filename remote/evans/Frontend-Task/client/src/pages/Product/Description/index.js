import React from 'react';
import { useSelector } from 'react-redux';
import './description.css';

export const Description = () => {
  const prodState = useSelector(state => state.product);
  const { product } = prodState;

  return (
    <div className='desc-con'>
      <p>Product Description:{' '}
        <span className='desc-name'>{product.description}</span></p>
    </div>
  )
}

export default Description;
