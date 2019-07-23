import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getUsers} from './../../thunks/userThunks/getUsersThunk';
import './Users.scss';
import {deleteUser} from "./../../thunks/userThunks/deleteThunk";
import {roleUpdate} from './../../thunks/userThunks/roleUpdateThunk';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers()
  }

  onAddUser = () => {
    this.props.history.push('/register');
  };

  onRoleUpdate = (user, newRole) => {
    const newUser = {...user, role: newRole};
    this.props.onRoleUpdate(newUser);
  }

  render() {
    const {isAuth, email} = this.props.auth;
    const {usersList} = this.props.usersList;
    const {deleteUser} = this.props
    if(!isAuth) return <Redirect to='/'/>
    const mappedUsers = usersList && usersList.map(user => {
      const changeRole = user.role === 'USER' ? 'ADMIN' : "USER";
      return (
        <div className='UsersListItem' key={user.id}>
          <span>User ID</span>: {user.id},  <span>Email</span>: {user.email}, <span>Role</span>: {user.role}
          {email !== user.email ? <button onClick={() =>this.onRoleUpdate(user, changeRole)}>Change to {changeRole}</button> : null}
          {email !== user.email ? <button onClick={() => deleteUser(user.email)}>Delete</button> : null}
        </div>
      )
    })
    return (
        <div className='Users'>
          <h3>Users registered in CRM ({ usersList.length})</h3>
          <button className='AddUser' onClick={this.onAddUser}>Add User</button>
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
  getUsers: () => dispatch(getUsers()),
  deleteUser: (email) => dispatch(deleteUser(email)),
  onRoleUpdate: (user) => dispatch(roleUpdate(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
