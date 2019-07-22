import {getUsersList} from './../../actions/userActions/getUsersActions';
import axios from 'axios';

export const getUsers = () => (dispatch) => {
  const url = 'http://localhost:9000/api/user/all-users';

  axios.get(url)
    .then(res => dispatch(getUsersList(res.data)))
    .catch(err => console.log(err))
}
