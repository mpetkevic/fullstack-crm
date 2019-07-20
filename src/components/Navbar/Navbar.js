import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import {onLogoutSubmit} from "../../thunks/logoutThunk";

import './Navbar.scss';

class Navbar extends Component {
  render() {
    const {isAuth, email, role} = this.props.auth;
    const {onLogout} = this.props;
    return (
        <div className='Navbar'>
          <Link to='/' className='Logo-link'>Full JS CRM</Link>
          <nav>
            <ul>
              {role === 'ADMIN' ? <NavLink to='/users' className='nav-link' activeClassName='active-link'>Users</NavLink> : null}
              <NavLink to='/products' className='nav-link' activeClassName='active-link'>Products</NavLink>
              <NavLink to='/orders' className='nav-link' activeClassName='active-link'>Orders</NavLink>
            </ul>
          </nav>
          <nav>
            <ul>
              <Link
                  to={isAuth ? '/account' : '/register'}
                  className='nav-link'
              >{isAuth ? email : 'Register'}</Link>
              <Link
                  to={isAuth ? '/' : '/login'}
                  className='nav-link'
                  onClick={isAuth ? onLogout : null}
              >{isAuth ? 'Logout' : 'Login'}</Link>
            </ul>
          </nav>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(onLogoutSubmit())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
