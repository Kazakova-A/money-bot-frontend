import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { auth } from './auth';
import { utils } from './utils';

import { AuthState } from './auth/declarations';
import { UtilsState } from './utils/declarations';

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  auth: AuthState;
  utils: UtilsState;
}

const rootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  auth,
  utils,
});

export default rootReducer;
