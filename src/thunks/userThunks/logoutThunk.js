import {logoutUser} from "../../actions/userActions/authActions";

export const onLogoutSubmit = () => (dispatch) => {
  dispatch(logoutUser());
};
