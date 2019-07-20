import {authUser} from "../actions/authActions";

export const onLoginSubmit = (user) => (dispatch) => {
  dispatch(authUser(user));
}
