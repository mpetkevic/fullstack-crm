import {onUpdateLoading, onUpdateError, onUpdateSuccess} from './../../actions/userActions/updateActions';
import {onLogoutSubmit} from "./logoutThunk";
import axios from 'axios';

export const onUpdate = (user, history) => (dispatch) => {
  dispatch(onUpdateLoading());
  if(user.password === '' || user.password2 === '') {
    return dispatch(onUpdateError('Please fill all fields'));
  }
  if(user.password !== user.password2) {
    return dispatch(onUpdateError('Passwords doesn\'t match'));
  }

  const updateJSON = {
    email: user.email,
    password: user.password
  }

  const url = 'http://localhost:9000/api/update';

  axios.put(url, updateJSON)
    .then(() => {
      onLogoutSubmit();
      history.push('/login');
    })
    .catch(err => dispatch(onUpdateError('Server Error')));
}
