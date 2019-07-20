import * as types from './../actions/types';

const initialState = {
  isAuth: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      console.log('Login')
      return {...state, isAuth: true};
    case types.LOGOUT_USER:
      return {...state, isAuth: false}
    default:
      return state;
  }
}
