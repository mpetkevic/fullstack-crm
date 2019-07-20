import {authUser} from "../actions/authActions";
import {onLoginLoading, onLoginError, onLoginSuccess} from './../actions/loginActions'

export const onLoginSubmit = (user, history) => (dispatch) => {
  dispatch(onLoginLoading());
  if(user.email === '' || user.password === '') {
    return dispatch(onLoginError('Please fill all fields'))
  }
  dispatch(onLoginSuccess());
  dispatch(authUser(user));
}
