import { AuthActionTypes } from 'store/types/auth';
import { AuthActionsUnion } from 'store/actions/auth';

import { INITIAL_STATE } from './initialState';
import { AuthState } from './declarations';

const authReducer = (
  state = INITIAL_STATE,
  action: AuthActionsUnion,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN_REQUEST:
    case AuthActionTypes.SEND_CONFIRM_CODE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.LOG_IN_SUCCESS:
    case AuthActionTypes.SEND_CONFIRM_CODE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case AuthActionTypes.LOG_IN_ERROR:
    case AuthActionTypes.SEND_CONFIRM_CODE_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case AuthActionTypes.CHANGE_LOGIN_PHASE: {
      return {
        ...state,
        loginPhase: action.payload,
      };
    }

    default: return state;
  }
};

export default authReducer;
