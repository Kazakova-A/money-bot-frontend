export enum AuthActionTypes {
  LOG_IN_REQUEST = 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS = 'LOG_IN_SUCCESS',
  LOG_IN_ERROR = 'LOG_IN_ERROR',

  LOGOUT = 'LOGOUT',
}

export enum UserRoleTypes {
  admin = 'Admin',
  editor = 'Editor',
  staff = 'Staff',
}

export interface LogInRequest {
  email: string;
  password: string;
  callback: (err: any, result: any) => void;
}

export interface GetAuthStateRequest {
  callback: (err: any, result: any) => void;
}

export interface RecoveryPasswordRequest {
  email: string;
  callback: (
    err: Error | undefined | null,
    result: any,
    isInputVerification?: boolean,
  ) => void;
}

export interface ConfirmPasswordRequest {
  email: string;
  verificationCode: string;
  newPassword: string;
  callback: (err: Error | undefined | null) => void;
}

export interface CreateUserRequest {
  email: string;
  password: string;
  name: string;
  phone: string;
  callback: (err: any, result: any) => void;
}

export interface UpdateCurrentUserInfo {
  role?: UserRoleTypes;
  token: string;
  email: string;
  userName: string;
}

export interface SetUserRoleReq {
  email: string;
  name: string;
  cognitoUserName: string;
  userTimezone?: string;
}

export interface SetUserRoleRes extends Response {
  email: string;
  name: string;
  cognitoUserName: string;
}
