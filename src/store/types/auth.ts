export enum AuthActionTypes {
  SEND_CONFIRM_CODE_REQUEST = 'SEND_CONFIRM_CODE_REQUEST',
  SEND_CONFIRM_CODE_SUCCESS = 'SEND_CONFIRM_CODE_SUCCESS',
  SEND_CONFIRM_CODE_ERROR = 'SEND_CONFIRM_CODE_ERROR',

  CHANGE_LOGIN_PHASE = 'CHANGE_LOGIN_PHASE',

  LOG_IN_REQUEST = 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_ERROR = 'LOG_IN_ERROR',

  LOGOUT = 'LOGOUT',
}

export enum LoginPhases {
  sendConfirmation = 0,
  confirmLogin = 1,
}

export interface ConfirmLoginReq {
  name: string;
  token: number;
}

export interface ConfirmLoginSuccess {
  name: string;
  tokens: {
    refreshToken: string;
    accessToken: string;
  }
}
