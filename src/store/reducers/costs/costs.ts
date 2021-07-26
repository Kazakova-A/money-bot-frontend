import { CostsActionTypes } from 'store/types/costs';
import { CostsActionsUnion } from 'store/actions/costs';

import { INITIAL_STATE } from './initialState';
import { CostsState } from './declarations';

const costsReducer = (
  state = INITIAL_STATE,
  action: CostsActionsUnion,
): CostsState => {
  switch (action.type) {
    case CostsActionTypes.GET_COSTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CostsActionTypes.GET_COSTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case CostsActionTypes.GET_COSTS_ERROR: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default: return state;
  }
};

export default costsReducer;
