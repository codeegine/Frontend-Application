import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import DashHome from './pages/DashHome';
import Product from './pages/Product';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <DashHome {...props} />} />
        <Route exact path="/product" render={(props) => <Product {...props} />} />
      </Switch>
    </Router>
  )
}

export default Routers;
