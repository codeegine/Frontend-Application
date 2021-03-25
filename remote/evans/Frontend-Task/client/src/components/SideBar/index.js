import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

import Footer from '../Footer';


const SideBar = () => {
  return (
    <div className='side-con'>
      <nav className='side-nav'>
        <ul>
          <Link to='/'>
            <li>
              Home
            </li>
          </Link>
          <Link to='/product'>
            <li>
              Product
            </li>
          </Link>
        </ul>
      </nav>
      <Footer />
    </div>
  )
}

export default SideBar;
