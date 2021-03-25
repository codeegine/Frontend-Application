import React, { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';

import './attributes.css';

import actions from '../../../redux/actions';

export const Attributes = () => {
  const { getTrl } = actions;

  let dispatch = useDispatch();
  const prodState = useSelector(state => state.product);
  const { product, trl } = prodState;

  useEffect(() => {
    dispatch(getTrl());
  }, [dispatch, getTrl])

  return (
    <div className='attr-con'>
      <div className='categories'>
        <p className='cat-p'>Categories</p>
        <div className='category'>
          {
            product.categories && product.categories.map(category => (
              <div key={category.id} className='cat'>
                <p>{category.name}</p>
                <input
                  name={category.name}
                  placeholder='Enter Text Here...'
                  className='cat-input'
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className='business-models'>
        <p className='mod-p'>Business Models</p>
        <div className='b-m'>
          {
            product.businessModels && product.businessModels.map(model => (
              <div key={model.id} className='mod'>
                <p className='m-name'>{model.name}</p>
                <input
                  name={model.name}
                  placeholder='Enter Text Here...'
                  className='mod-input'
                />
              </div>
            ))
          }
        </div>
      </div>

      <div className='trl'>
        <p className='trl-p'>TRL</p>
        <select className='t-r-l'>
          {
            trl && trl.map(trl => (
              <option key={trl.id} value={trl.name}>{trl.name}</option>
            ))
          }
        </select>
      </div>
    </div>)
}

export default Attributes;
