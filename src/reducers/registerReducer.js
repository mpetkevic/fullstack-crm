import * as types from './../actions/types';

const initialState = {
  email: '',
  password: '',
  password2: '',
  error: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.REGISTER_FORM_LOADING:
      return {...state, error: '', loading: true};
    case types.REGISTER_FORM_ERROR:
      return {...state, error: action.error, loading: false};
    case types.REGISTER_FORM_SUCCESS:
      return {...state, email: '', password: '', password2: '', error: '', loading: false}
    default:
      return state;
  }
}
