import { combineReducers } from 'redux';
import authorizationReducer from './authorizationReducer';
import recoveryPassReducer from './recoveryPassReducer';

export const rootReducer = combineReducers({
  authorization: authorizationReducer,
  recoveryPassword: recoveryPassReducer,
});
