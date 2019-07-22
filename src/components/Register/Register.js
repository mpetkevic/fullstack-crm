import React, {Component} from 'react';
import Loader from './../Loader/Loader';
import {connect} from 'react-redux';
import {onInputChange} from './../../actions/userActions/registerActions';
import {onRegisterSubmit} from './../../thunks/userThunks/registerThunk';
import './Register.scss';

class Register extends Component {

  onRegisterClick = (e) => {
    e.preventDefault();
    this.props.onRegister(this.props.register, this.props.history)
  };

  render() {
    const {email, password, password2, error, loading} = this.props.register;
    const {onInputChange} = this.props;
    return (
        <div className='Register'>
          <form className='Register-form'>
            <h2>Register to CRM</h2>
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
            <label htmlFor='password2'>Repeat Password</label>
            <input
                type='password'
                name='password2'
                value={password2}
                onChange={onInputChange}
                placeholder='Please repeat password'/>
            <button onClick={this.onRegisterClick}>{loading ? <Loader h={15} color={'#353538'}/> : 'Register'}</button>
          </form>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.register
  }
};

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (e) => dispatch(onInputChange(e)),
  onRegister: (user, history) => dispatch(onRegisterSubmit(user, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
