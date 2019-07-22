import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getUsers} from './../../thunks/userThunks/getUsersThunk';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  render() {
    const {isAuth, email} = this.props.auth;
    const {usersList} = this.props.usersList;
    if(!isAuth) return <Redirect to='/'/>
    const mappedUsers = usersList && usersList.map(user => {
      return (
        <div key={user.id}>
          <span>User ID</span>: {user.id}, <span>Email</span>: {user.email}, <span>Role</span>: {user.role}
          {email !== user.email ? <button>Delete</button> : null}
        </div>
      )
    })
    return (
        <div>
          <h3>Users registered in CRM ({ usersList.length})</h3>
          {mappedUsers}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    usersList: state.usersList
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
