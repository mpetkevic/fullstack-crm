import * as types from './types';

export function authUser(user) {
  return {
    type: types.AUTH_USER,
    user
  }
}

export function logoutUser() {
  return {
    type: types.LOGOUT_USER
  }
}
