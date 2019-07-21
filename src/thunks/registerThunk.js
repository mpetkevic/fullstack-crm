import axios from 'axios';
import {onRegisterLoading, onRegisterError, onRegisterSuccess} from './../actions/registerActions';

export const onRegisterSubmit = (user, history) => (dispatch) => {
  dispatch(onRegisterLoading());
  if(user.email === '' || user.password === '' || user.password2 === '') {
    return dispatch(onRegisterError('Please fill all fields'))
  }
  if(user.password !== user.password2) {
    return dispatch(onRegisterError('Passwords doesn\'t match'))
  }

  const url = 'http://localhost:9000/api/register';

  const registerJSON = {
    email: user.email,
    password: user.password
  };

  axios.post(url, registerJSON)
      .then(res => {
        console.log('Registration successful');
        console.log(res.data);
        dispatch(onRegisterSuccess());
        history.push('/login');
      })
      .catch(err => console.log(err));

};
