import React, {Component} from 'react';
import {connect} from "react-redux";
import {onLoginSubmit} from "./../../thunks/userThunks/loginThunk";
import {onInputChange} from "./../../actions/userActions/loginActions";
import Loader from './../Loader/Loader';
import './Login.scss';



class Login extends Component{

  onLoginClick = (e) => {
    e.preventDefault();
    this.props.onLogin(this.props.login, this.props.history)
  }

  render() {
    const {email, password, error, loading} = this.props.login;
    const {onInputChange} = this.props;
    return (
        <div className='Login'>
          <form className='Login-form'>
            <h2>Login to CRM</h2>
            {error !== '' ? <p className='error'>{error}</p> : null}
            <label htmlFor='email'>Email</label>
            <input
                type='email'
                name='email'
                value={email}
                onChange={onInputChange}
                placeholder='Please enter email'/>
            <label htmlFor='password'>Password</label>
            <input
                type='password'
                name='password'
                value={password}
                onChange={onInputChange}
                placeholder='Please enter password'/>
            <button onClick={this.onLoginClick}>{loading ? <Loader h={15} color={'#353538'}/> : 'Login'}</button>
          </form>
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(onInputChange(e)),
  onLogin: (user, history) => dispatch(onLoginSubmit(user,history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
