import * as types from './../../actions/types';

const initialState = {
  password: '',
  password2: '',
  error: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.UPDATE_USER_FORM_LOADING:
      return {...state, error: '', loading: true};
    case types.UPDATE_USER_FORM_ERROR:
      return {...state, error: action.error, loading: false};
    case types.UPDATE_USER_FORM_SUCCESS:
      return {...state, error: '', password: '', password2: '', loading: false};
    default:
      return state;
  }
}
