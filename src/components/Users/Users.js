import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

class Users extends Component {

  render() {
    const {isAuth} = this.props.auth;
    if(!isAuth) return <Redirect to='/'/>
    return (
        <div>
          Users Component
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Users);
