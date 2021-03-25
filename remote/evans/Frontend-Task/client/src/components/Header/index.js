import React from 'react';
import './header.css';

import InnoloftLogo from '../../assets/innoloft-no-white-space.png'

const Header = () => {
  return (
    <div className='header-con'>
      <div className='logo'>
        <img src={InnoloftLogo} alt='innoloft-logo' />
      </div>
      <div className='header-right'>
        <h1>User Profile</h1>
      </div>
    </div>
  )
}

export default Header;
