import * as types from '../../actions/types';

const initialState = {
  isAuth: false,
  email: '',
  role: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {...state, isAuth: true, email: action.user.email, role: action.user.role};
    case types.LOGOUT_USER:
      return {...state, isAuth: false, role: ''}
    default:
      return state;
  }
}
