import axios from 'axios';

import {authUser} from "../actions/authActions";
import {onLoginLoading, onLoginError, onLoginSuccess} from './../actions/loginActions'

export const onLoginSubmit = (user, history) => (dispatch) => {
  dispatch(onLoginLoading());
  if(user.email === '' || user.password === '') {
    return dispatch(onLoginError('Please fill all fields'))
  }

  const url = 'http://localhost:9000/api/login';

  const loginJSON = {
    email: user.email,
    password: user.password
  }

  axios.post(url, loginJSON)
      .then(res => {
        console.log(res.data);
        dispatch(onLoginSuccess());
        dispatch(authUser(res.data));
        history.push('/');
      })
      .catch(err => console.log(err));


};
