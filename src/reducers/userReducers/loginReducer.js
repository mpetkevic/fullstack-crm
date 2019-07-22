import * as types from '../../actions/types';

const initialState = {
  email: '',
  password: '',
  error:'',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.LOGIN_USER_FORM_LOADING:
      return {...state, error: '', loading: true};
    case types.LOGIN_USER_FORM_ERROR:
      return {...state, error: action.error, loading: false};
    case types.LOGIN_USER_FORM_SUCCESS:
      return {...state, email: '', password: '', error: '', loading: false};
    default:
      return state;
  }
}
