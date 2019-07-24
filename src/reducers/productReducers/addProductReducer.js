import * as types from './../../actions/types';

const initialState = {
  name: '',
  description: '',
  picture: '',
  price: '',
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.ADD_PRODUCT_FORM_ERROR:
      return {...state, loading: false, error: action.error};
    case types.ADD_PRODUCT_FORM_LOADING:
      return {...state, error: '', loading: true};
    case types.ADD_PRODUCT_FORM_SUCCESS:
      return {
        ...state,
        name: '',
        description: '',
        picture: '',
        price: '',
        error: '',
        loading: false
      };
    default:
      return state;
  }
}
