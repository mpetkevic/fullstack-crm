import axios from 'axios';

import {authUser} from "./../../actions/userActions/authActions";
import {onLoginLoading, onLoginError, onLoginSuccess} from './../../actions/userActions/loginActions'

export const onLoginSubmit = (user, history) => (dispatch) => {
  dispatch(onLoginLoading());
  if(user.email === '' || user.password === '') {
    return dispatch(onLoginError('Please fill all fields'))
  }

  const url = 'http://localhost:9000/api/user/login';

  const loginJSON = {
    email: user.email,
    password: user.password
  }

  axios.post(url, loginJSON)
      .then(res => {
        dispatch(onLoginSuccess());
        dispatch(authUser(res.data));
        localStorage.setItem('CRM-user-session', JSON.stringify({
          email: res.data.email,
          role: res.data.role
        }))
        history.push('/');
      })
      .catch(err => {
        dispatch(onLoginError(err.response.data.error))
      });


};
