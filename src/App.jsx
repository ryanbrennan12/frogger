import React from 'react';
import { render} from 'react-dom';
import {
  BrowserRouter,
 } from 'react-router-dom';

import Navbar from './Navbar';
import Body from './Body';

class App extends React.Component {
  constructor() {
    super();
    console.log('App constructed.');
    this.state = {
      links: [

      ],
    };
  }
  render() {
    return (
      <div>
        <Navbar
        links = { this.state.links }
        />
        <Body />
      </div>
    );
  }
}

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
