import { Action, ActionsUnion, createAction } from 'src/store/helpers/redux';
import {
  AuthActionTypes,
  LogInRequest,
} from 'src/store/types/auth';

export const AuthActions = {
  logInRequest: (payload: LogInRequest): Action<
  AuthActionTypes.LOG_IN_REQUEST,
  LogInRequest
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
