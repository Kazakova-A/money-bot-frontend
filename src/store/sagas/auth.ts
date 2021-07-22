import {
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { AuthActions, AuthActionsUnion } from 'store/actions/auth';
import { AuthActionTypes, LoginPhases } from 'store/types/auth';
import { UtilsActions } from 'store/actions/utils';

import { PickAction } from 'store/helpers/redux';
import { ROUTES } from 'routes/constants';

function* sendConfirmCodeSaga(action: PickAction<
AuthActionsUnion, AuthActionTypes.SEND_CONFIRM_CODE_REQUEST>): Generator {
  try {
    // TODO: remove delay when api will be ready
    yield delay(1000);
    yield put(AuthActions.sendConfirmCodeSuccess());
    yield put(AuthActions.changeLoginPhase(LoginPhases.confirmLogin));
    yield put(UtilsActions.openNotification({
      text: 'Code send to your telegram',
      type: 'info',
    }));
  } catch (e) {
    yield put(AuthActions.sendConfirmCodeError());
    yield put(UtilsActions.openNotification({
      text: 'Server error',
      type: 'error',
    }));
  }
}

function* logInRequestSaga(action: PickAction<
AuthActionsUnion, AuthActionTypes.LOG_IN_REQUEST>): Generator {
  try {
    // TODO: remove delay when api will be ready
    yield delay(1000);
    yield put(AuthActions.logInSuccess());
  } catch (e) {
    yield put(AuthActions.logInError());
    yield put(UtilsActions.openNotification({
      text: 'Server error',
      type: 'error',
    }));
  }
}

function* logoutSaga(): Generator {
  localStorage.removeItem('token');
  yield put(push(ROUTES.login));
}

function* watch(): Generator {
  yield takeLatest(AuthActionTypes.SEND_CONFIRM_CODE_REQUEST, sendConfirmCodeSaga);
  yield takeLatest(AuthActionTypes.LOG_IN_REQUEST, logInRequestSaga);
  yield takeLatest(AuthActionTypes.LOGOUT, logoutSaga);
}

export default watch;
