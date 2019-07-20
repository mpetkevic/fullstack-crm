import React, {Component, Fragment} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Orders from './components/Orders/Orders'

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
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
