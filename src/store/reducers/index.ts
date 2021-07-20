import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { auth } from './auth';

import { AuthState } from './auth/declarations';

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  auth: AuthState;

}

const rootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  auth,
});

export default rootReducer;
