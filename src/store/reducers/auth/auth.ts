import { AuthActionTypes } from 'src/store/types/auth';
import { AuthActionsUnion } from 'src/store/actions/auth';

import { INITIAL_STATE } from './initialState';
import { AuthState } from './declarations';

const authReducer = (
  state = INITIAL_STATE,
  action: AuthActionsUnion,
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case AuthActionTypes.LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    }
    case AuthActionTypes.LOG_IN_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: return state;
  }
};

export default authReducer;
