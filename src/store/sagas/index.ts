import { all } from 'redux-saga/effects';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import auth from './auth';
import costs from './costs';

export const history = createBrowserHistory();

export default function* staticSagas(): Generator {
  yield all([
    routerMiddleware(history),
    auth(),
    costs(),
  ]);
}
