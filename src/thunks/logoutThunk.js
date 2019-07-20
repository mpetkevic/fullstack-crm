import {logoutUser} from "../actions/authActions";

export const onLogoutSubmit = () => (dispatch) => {
  dispatch(logoutUser());
}
