import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { CostsActionTypes } from 'store/types/costs';

export const CostsActions = {
  getCostsRequest: (payload: any): Action<
  CostsActionTypes.GET_COSTS_REQUEST,
  any
  > => createAction(
    CostsActionTypes.GET_COSTS_REQUEST,
    payload,
  ),
  // TODO: add expected payload
  getCostsSuccess: (): Action<
  CostsActionTypes.GET_COSTS_SUCCESS
  > => createAction(
    CostsActionTypes.GET_COSTS_SUCCESS,
  ),
  getCostsError: (): Action<
  CostsActionTypes.GET_COSTS_ERROR
  > => createAction(
    CostsActionTypes.GET_COSTS_ERROR,
  ),
};

export type CostsActionsUnion = ActionsUnion<
  typeof CostsActions>;
