import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
        <div className='Navbar'>
          <Link to='/' className='Logo-link'>Full JS CRM</Link>
          <nav>
            <ul>
              <NavLink to='/products' className='nav-link' activeClassName='active-link'>Products</NavLink>
              <NavLink to='/orders' className='nav-link' activeClassName='active-link'>Orders</NavLink>
            </ul>
          </nav>
          <div>
            <li>User email</li>
            <li>Logout</li>
          </div>
        </div>
    );
  }
}

export default Navbar;
