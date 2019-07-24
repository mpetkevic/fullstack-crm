import {combineReducers} from  'redux';
import authReducer from './userReducers/authReducer';
import loginReducer from './userReducers/loginReducer';
import registerReducer from './userReducers/registerReducer';
import updateReducer from './userReducers/updateReducer';
import getUsersReducer from './userReducers/getUsersReducer';
import getProductsReducer from './productReducers/getProductsReducer';
import addProductReducer from './productReducers/addProductReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
  update: updateReducer,
  usersList: getUsersReducer,
  productsList: getProductsReducer,
  addProduct: addProductReducer
})

export default rootReducer;
