import * as types from './../types';

export function getUsersList(users) {
  return {
    type: types.GET_USERS_LIST,
    users
  }
}
