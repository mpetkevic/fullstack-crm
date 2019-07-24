import * as types from './../../actions/types';

const initialState = {
  id: '',
  name: '',
  description: '',
  picture: '',
  price: '',
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT_INPUT_CHANGE:
      return {...state, [action.name]: action.value};
    case types.SET_PRODUCT_ID_ON_EDIT:
      return {
        ...state,
        id: action.id,
        name: action.product.name,
        description: action.product.description,
        picture: action.product.picture,
        price: action.product.price,
      };
    case types.EDIT_PRODUCT_FORM_ERROR:
      return {...state, loading: false, error: action.error};
    case types.EDIT_PRODUCT_FORM_LOADING:
      return {...state, error: '', loading: true};
    case types.EDIT_PRODUCT_FORM_SUCCESS:
      return {
        ...state,
        id: '',
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
