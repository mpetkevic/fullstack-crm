import {combineReducers} from  'redux';
import authReducer from './userReducers/authReducer';
import loginReducer from './userReducers/loginReducer';
import registerReducer from './userReducers/registerReducer';
import updateReducer from './userReducers/updateReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
  update: updateReducer
})

export default rootReducer;
