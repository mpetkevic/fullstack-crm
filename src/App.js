import React, {Component, Fragment} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders';
import User from './components/User/User';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

class App extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Fragment>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/products' component={Products}/>
              <Route path='/orders' component={Orders}/>
              <Route path='/account' component={User}/>
              <Route path='/users' component={Users}/>
              <Route path='/login' component={Login}/>
              <Route path='/register' component={Register}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
