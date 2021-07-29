import {
  put,
  takeLatest,
  delay,
  call,
} from 'redux-saga/effects';

import { AuthActions } from 'store/actions/auth';
import { CostsActions, CostsActionsUnion } from 'store/actions/costs';
import { CostsActionTypes, CostsRecord } from 'store/types/costs';
import { UtilsActions } from 'store/actions/utils';
import { getCostsStatistic } from 'api/costs';
import { PickAction } from 'store/helpers/redux';

function* sendConfirmCodeSaga(action: PickAction<
CostsActionsUnion, CostsActionTypes.GET_COSTS_REQUEST>): Generator {
  try {
    // TODO: remove delay when api will be ready
    const res = (yield call(getCostsStatistic, action.payload)) as CostsRecord[];
    yield delay(1000);
    yield put(CostsActions.getCostsSuccess(res));
  } catch (e) {
    const { message } = e as Error;

    if (message === 'Пользователь не авторизован') {
      yield put(AuthActions.logout());
    }
    yield put(CostsActions.getCostsError());
    yield put(UtilsActions.openNotification({
      text: 'Server error',
      type: 'error',
    }));
  }
}

function* watch(): Generator {
  yield takeLatest(CostsActionTypes.GET_COSTS_REQUEST, sendConfirmCodeSaga);
}

export default watch;
