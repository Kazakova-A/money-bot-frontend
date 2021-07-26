import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { auth } from './auth';
import { utils } from './utils';
import { costs } from './costs';

import { AuthState } from './auth/declarations';
import { UtilsState } from './utils/declarations';
import { CostsState } from './costs/declarations';

interface StoreEnhancerState {}

export interface RootState extends StoreEnhancerState {
  auth: AuthState;
  utils: UtilsState;
  costs: CostsState;
}

const rootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  auth,
  utils,
  costs,
});

export default rootReducer;
