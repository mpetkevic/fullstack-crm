import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Users extends Component {
  state = {
    auth: false
  }
  render() {
    const {auth} = this.state;
    if(!auth) return <Redirect to='/'/>
    return (
        <div>
          Users Component
        </div>
    );
  }
}

export default Users;
