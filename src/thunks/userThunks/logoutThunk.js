import {logoutUser} from "../../actions/userActions/authActions";

export const onLogoutSubmit = () => (dispatch) => {
  dispatch(logoutUser());
  localStorage.removeItem('CRM-user-session');
};
