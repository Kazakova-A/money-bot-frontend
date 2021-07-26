import {
  put,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { CostsActions, CostsActionsUnion } from 'store/actions/costs';
import { CostsActionTypes } from 'store/types/costs';
import { UtilsActions } from 'store/actions/utils';

import { PickAction } from 'store/helpers/redux';
import { ROUTES } from 'routes/constants';

function* sendConfirmCodeSaga(action: PickAction<
CostsActionsUnion, CostsActionTypes.GET_COSTS_REQUEST>): Generator {
  try {
    // TODO: remove delay when api will be ready
    yield delay(1000);
    yield put(CostsActions.getCostsSuccess());
  } catch (e) {
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
