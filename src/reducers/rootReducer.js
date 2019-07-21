import {combineReducers} from  'redux';
import authReducer from './authReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer
})

export default rootReducer;
