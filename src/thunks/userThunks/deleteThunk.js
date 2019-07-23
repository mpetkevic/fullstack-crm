import {getUsers} from './../../thunks/userThunks/getUsersThunk';
import axios from 'axios';

export const deleteUser = (email) => (dispatch) => {
  console.log('Clicked');

  const url = 'http://localhost:9000/api/user/delete';

  axios.delete(`${url}/${email}`)
    .then(() => dispatch(getUsers()))
    .catch(err => console.log(err))
}

