import React from 'react';
import { Switch, Redirect, BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Main}/>
        <Route exact path={process.env.PUBLIC_URL + "/not-found"} component={NotFound}/>
        <Redirect to="/not-found"/>
      </Switch>
    </BrowserRouter>
)
  
};

export default Routes;