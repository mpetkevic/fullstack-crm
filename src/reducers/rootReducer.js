import {combineReducers} from  'redux';
import authReducer from './authReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer
})

export default rootReducer;
