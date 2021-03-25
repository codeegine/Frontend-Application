import React from 'react';
import './layout.css';

import Header from '../Header';
import SideBar from '../SideBar';

const Layout = ({ children }) => {
  return (
    <div className='layout-con'>
      <Header />
      <div className='layout-body'>
        <SideBar />
        <main className='main'>{children}</main>
      </div>
    </div>
  )
}

export default Layout;
