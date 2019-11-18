import React from 'react';
import {
  Switch,
  Route,
 } from 'react-router-dom';

import Home from './Home';
import Frogger from './Frogger';
import Login from './Login';
import EditUserInfo from './EditUserInfo';

const Body = () => (
  <main>
    <Switch>
      <Route
      exact
      path = '/'
      component = { Home }
      />
      <Route
      exact
      path = '/frogger'
      component = { Frogger }
      />
      <Route
      path = '/login'
      component = { Login }
      />
      <Route
      path = '/edit-user-info'
      component = { EditUserInfo }
      />
    </Switch>
  </main>
);

export default Body;
