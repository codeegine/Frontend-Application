import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './product.css';

import Description from './Description';
import Attributes from './Attributes';
import Layout from '../../components/Layout';
import actions from '../../redux/actions';


const mapTabsToSubComponent = {
  description: <Description />,
  attributes: <Attributes />,
};

const SubComponent = ({ activeTab }) => {
  return mapTabsToSubComponent[activeTab]
}

const Product = () => {

  const { getProduct } = actions;

  let dispatch = useDispatch();
  const prodState = useSelector(state => state.product);
  const { product } = prodState;

  const [activeTab, setActiveTab] = useState('description');

  const tabNames = Object.keys(mapTabsToSubComponent)

  const handleTabChange = (e) => {
    const name = e.target.getAttribute('data-name');
    setActiveTab(name);
  }


  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, getProduct])

  return (
    <Layout>
      {
        prodState.loading ? (<h2>Loading...</h2>) : (
          <div className='product-con'>
            <div className='left-con'>
              <div className='prod-image'>
                <img src={product.picture} alt={product.name} />
              </div>

              {
                product && (
                  <div className='prod-info'>
                    <p>Product Title:{' '}
                      <span className='prod-prop'>{product.name}</span>
                    </p>
                    <p>Product Type:{' '}
                      <span className='prod-prop'>{product.type && product.type.name}</span>
                    </p>
                  </div>
                )
              }

              <div className="tab-content-con">
                <div className='tabs'>
                  <ul>
                    {
                      tabNames.map(name => (
                        <li
                          key={`${name}-0`}
                          data-name={name}
                          className={activeTab === name ? 'activeTab' : ''}
                          onClick={(e) => handleTabChange(e)}
                        >
                          {name === tabNames[0] ? 'Description' : 'Attributes' }
                        </li>
                      ))
                    }
                  </ul>
                </div>

                <SubComponent activeTab={activeTab} />
              </div>
            </div>

            <div className='right-con'>
              <div className='user-info'>
                {
                  product.user && product.company && (
                  <>
                    <div className='profile-image'>
                      <img 
                        src={product.user.profilePicture}
                        alt={product.user.firstName + ' ' + product.user.lastName}
                      />
                    </div>

                    <p>{product.user.firstName + ' ' + product.user.lastName}</p>

                    <p>{product.company.name}</p>
                  </>)
                }
              </div>

              <div className='map'>
                <p>Google Map</p>
              </div>
            </div>
          </div>
        )
      }
    </Layout>
  )
}

export default Product;
