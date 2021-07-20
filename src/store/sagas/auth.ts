import {
  put,
  takeLatest,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { AuthActions, AuthActionsUnion } from 'src/store/actions/auth';
import { AuthActionTypes } from 'src/store/types/auth';
import { PickAction } from 'src/store/helpers/redux';
import { ROUTES } from 'src/routes/constants';

function* logInRequestSaga(action: PickAction<
AuthActionsUnion, AuthActionTypes.LOG_IN_REQUEST>): Generator {
  try {
    yield put(AuthActions.logInSuccess());
  } catch (e) {
    yield put(AuthActions.logInError());
  }
}

function* logoutSaga(): Generator {
  localStorage.removeItem('token');
  yield put(push(ROUTES.login));
}

function* watch(): Generator {
  yield takeLatest(AuthActionTypes.LOG_IN_REQUEST, logInRequestSaga);
  yield takeLatest(AuthActionTypes.LOGOUT, logoutSaga);
}

export default watch;
