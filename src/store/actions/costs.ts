import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { CostsActionTypes, CostsRecord } from 'store/types/costs';

export const CostsActions = {
  // TODO: set valid payload types
  getCostsRequest: (payload: { sortType: string | unknown, date?: string | unknown }): Action<
  CostsActionTypes.GET_COSTS_REQUEST,
  { sortType: string | unknown }
  > => createAction(
    CostsActionTypes.GET_COSTS_REQUEST,
    payload,
  ),
  getCostsSuccess: (payload: CostsRecord[]): Action<
  CostsActionTypes.GET_COSTS_SUCCESS,
  CostsRecord[]
  > => createAction(
    CostsActionTypes.GET_COSTS_SUCCESS,
    payload,
  ),
  getCostsError: (): Action<
  CostsActionTypes.GET_COSTS_ERROR
  > => createAction(
    CostsActionTypes.GET_COSTS_ERROR,
  ),
};

export type CostsActionsUnion = ActionsUnion<
  typeof CostsActions>;
