import React from 'react';
import {
  Link,
 } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <h1>ExpresSPJ</h1>
      <ul>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/frogger'>Frogger</Link></li>
        <li><Link to = '/login'>Login</Link></li>
        <li><Link to = '/edit-user-info'>Edit User Info</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
