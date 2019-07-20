import React, {Component, Fragment} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Fragment>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
