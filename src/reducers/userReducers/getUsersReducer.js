import * as types from './../../actions/types';

const initialState = {
  usersList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_LIST:
      return {...state, usersList: action.users}
    default:
      return state;
  }
} 
