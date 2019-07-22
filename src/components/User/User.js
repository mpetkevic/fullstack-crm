import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {onInputChange} from './../../actions/userActions/updateActions';
import {onUpdate} from './../../thunks/userThunks/updateThunk'
import Loader from './../Loader/Loader';
import './User.scss';

class User extends Component {

  onUpdateClick = (e) => {
    e.preventDefault();
    const user = {
      email: this.props.auth.email,
      password: this.props.update.password,
      password2: this.props.update.password2,
    }
    this.props.onUpdateSubmit(user, this.props.history);
  }

  render() {
    const {isAuth, email} = this.props.auth;
    const {password, password2, error, loading} = this.props.update;
    const {onInputChange} = this.props
    if(!isAuth) return <Redirect to='/'/>
    return (
        <div className='User'>
          <h3>User Info</h3>
          <div className='UserInfo'>
            <div className="Info">
              <p><span>Email: </span>{email}</p>
            </div>
            <div className="Update">
              <form className='Update-form'>
                <h2>Update your password:</h2>
                {error !== '' ? <p className='error'>{error}</p> : null}
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  placeholder="Enter new password"/>
                <label htmlFor="password2">Repeat Password</label>
                <input
                  type="password"
                  name="password2"
                  value={password2}
                  onChange={onInputChange}
                  placeholder="Repeat new password"/>
                <button onClick={this.onUpdateClick}>{loading ? <Loader h={15} color={'#353538'}/> : 'Update'}</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    update: state.update
  }
};

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(onInputChange(e)),
  onUpdateSubmit: (user,history) => dispatch(onUpdate(user, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
