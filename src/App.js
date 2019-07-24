import React, {Component, Fragment} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {connect} from "react-redux";
import {authUser} from './actions/userActions/authActions';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import User from './components/User/User';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddProduct from './components/AddProduct/AddProduct';

class App extends Component {
  componentDidMount() {
    const userInfo = localStorage.getItem('CRM-user-session');
    if(userInfo) {
      this.props.authUser(JSON.parse(userInfo));
    }
  }

  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Fragment>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route path='/orders' component={Orders}/>
              <Route path='/account' component={User}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
              <Route path='/users' component={Users}/>
              <Route exact path='/products/add-product' component={AddProduct}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authUser: (user) => dispatch(authUser(user))
});

export default connect(null, mapDispatchToProps)(App);
