import {onRegisterLoading, onRegisterError, onRegisterSuccess} from './../actions/registerActions';

export const onRegisterSubmit = (user, history) => (dispatch) => {
  dispatch(onRegisterLoading());
  if(user.email === '' || user.password === '' || user.password2 === '') {
    return dispatch(onRegisterError('Please fill all fields'))
  }
  if(user.password !== user.password2) {
    return dispatch(onRegisterError('Passwords doesn\'t match'))
  }

  const registerJSON = {
    email: user.email,
    password: user.password
  };

  dispatch(onRegisterSuccess());
  history.push('/login')
};
