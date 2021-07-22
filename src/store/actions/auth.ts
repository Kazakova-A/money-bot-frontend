import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { AuthActionTypes, LoginPhases } from 'store/types/auth';

export const AuthActions = {
  sendConfirmCodeRequest: (payload: string): Action<
  AuthActionTypes.SEND_CONFIRM_CODE_REQUEST,
  string
  > => createAction(
    AuthActionTypes.SEND_CONFIRM_CODE_REQUEST,
    payload,
  ),
  sendConfirmCodeSuccess: (): Action<
  AuthActionTypes.SEND_CONFIRM_CODE_SUCCESS
  > => createAction(
    AuthActionTypes.SEND_CONFIRM_CODE_SUCCESS,
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

  logInRequest: (payload: number): Action<
  AuthActionTypes.LOG_IN_REQUEST,
  number
  > => createAction(
    AuthActionTypes.LOG_IN_REQUEST,
    payload,
  ),
  logInSuccess: (): Action<
  AuthActionTypes.LOG_IN_SUCCESS
  > => createAction(
    AuthActionTypes.LOG_IN_SUCCESS,
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
  typeof AuthActions>;
