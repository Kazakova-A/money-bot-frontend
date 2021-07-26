import { put, takeLatest, call } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';

import { AuthActions, AuthActionsUnion } from 'store/actions/auth';
import {
  AuthActionTypes,
  LoginPhases,
  ConfirmLoginSuccess,
} from 'store/types/auth';
import { UtilsActions } from 'store/actions/utils';
import { PickAction } from 'store/helpers/redux';
import { sendConfirmationCode, confirmLogin } from 'api/auth';
import { ROUTES } from 'routes/constants';
import saveToken from 'utils/helpers/saveTokens';

function* sendConfirmCodeSaga(action: PickAction<
AuthActionsUnion, AuthActionTypes.SEND_CONFIRM_CODE_REQUEST>): Generator {
  try {
    yield call(sendConfirmationCode, action.payload);
    yield put(AuthActions.sendConfirmCodeSuccess(action.payload));
    yield put(AuthActions.changeLoginPhase(LoginPhases.confirmLogin));
    yield put(UtilsActions.openNotification({
      text: 'Code send to your telegram',
      type: 'info',
    }));
  } catch (e) {
    const { message } = e as Error;

    yield put(AuthActions.sendConfirmCodeError());
    yield put(UtilsActions.openNotification({
      text: message || 'Server error',
      type: 'error',
    }));
  }
}

function* logInRequestSaga(action: PickAction<
AuthActionsUnion, AuthActionTypes.LOG_IN_REQUEST>): Generator {
  try {
    const data = (yield call(confirmLogin, action.payload)) as ConfirmLoginSuccess;

    yield put(AuthActions.logInSuccess(data));
    saveToken(data.tokens.accessToken, data.tokens.refreshToken);
    yield put(replace(ROUTES.costs));
  } catch (e) {
    const { message } = e as Error;

    yield put(AuthActions.logInError());
    yield put(UtilsActions.openNotification({
      text: message || 'Server error',
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
