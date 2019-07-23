import {getUsers} from "./getUsersThunk";
import axios from 'axios';
import {onUpdateError} from "./../../actions/userActions/updateActions";


export const roleUpdate = (user) => (dispatch) => {
  const updateJSON = {
    email: user.email,
    password: user.password,
    role: user.role
  }

  const url = 'http://localhost:9000/api/user/update-role';

  axios.put(url, updateJSON)
    .then(() => {
      dispatch(getUsers());
    })
    .catch(() => dispatch(onUpdateError('Server Error')));
}
