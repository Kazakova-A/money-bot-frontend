import { RehydrateAction } from 'redux-persist';

import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import {
  AuthActionTypes,
  LoginPhases,
  ConfirmLoginReq,
  ConfirmLoginSuccess,
} from 'store/types/auth';

export const AuthActions = {
  sendConfirmCodeRequest: (payload: string): Action<
  AuthActionTypes.SEND_CONFIRM_CODE_REQUEST,
  string
  > => createAction(
    AuthActionTypes.SEND_CONFIRM_CODE_REQUEST,
    payload,
  ),
  sendConfirmCodeSuccess: (payload: string): Action<
  AuthActionTypes.SEND_CONFIRM_CODE_SUCCESS,
  string
  > => createAction(
    AuthActionTypes.SEND_CONFIRM_CODE_SUCCESS,
    payload,
  ),
  sendConfirmCodeError: (): Action<
  AuthActionTypes.SEND_CONFIRM_CODE_ERROR
  > => createAction(
    AuthActionTypes.SEND_CONFIRM_CODE_ERROR,
  ),

  changeLoginPhase: (payload: LoginPhases): Action<
  AuthActionTypes.CHANGE_LOGIN_PHASE,
  number
  > => createAction(
    AuthActionTypes.CHANGE_LOGIN_PHASE,
    payload,
  ),

  logInRequest: (payload: ConfirmLoginReq): Action<
  AuthActionTypes.LOG_IN_REQUEST,
  ConfirmLoginReq
  > => createAction(
    AuthActionTypes.LOG_IN_REQUEST,
    payload,
  ),
  // TODO: add payload
  logInSuccess: (payload: ConfirmLoginSuccess): Action<
  AuthActionTypes.LOG_IN_SUCCESS,
  ConfirmLoginSuccess
  > => createAction(
    AuthActionTypes.LOG_IN_SUCCESS,
    payload,
  ),
  logInError: (): Action<
  AuthActionTypes.LOG_IN_ERROR
  > => createAction(
    AuthActionTypes.LOG_IN_ERROR,
  ),

  logout: (): Action<
  AuthActionTypes.LOGOUT
  > => createAction(
    AuthActionTypes.LOGOUT,
  ),
};

export type AuthActionsUnion = ActionsUnion<
  typeof AuthActions> | RehydrateAction;
