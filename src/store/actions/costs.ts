import { Action, ActionsUnion, createAction } from 'store/helpers/redux';
import { CostsActionTypes, CostsRecord } from 'store/types/costs';

export const CostsActions = {
  // TODO: set valid payload types
  getCostsRequest: (
    payload: {
      sortType: string | unknown,
      date?: string,
      currentPage: number,
      dateStart?: number,
      dateEnd?: number
    },
  ): Action<
  CostsActionTypes.GET_COSTS_REQUEST,
  { sortType: string | unknown,
    currentPage: number,
    date?: string,
    dateStart?: number,
    dateEnd?: number }
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
  getNextPage: (page: number): Action<
  CostsActionTypes.GET_NEXT_PAGE,
  number
  > => createAction(
    CostsActionTypes.GET_NEXT_PAGE,
    page,
  ),
  /* getForDate: (payload: { currentPage: number, dateStart?: number | unknown, dateEnd?: number | unknown }): Action<
  CostsActionTypes.GET_DATE_PERIOD
  > => createAction(
    CostsActionTypes.GET_DATE_PERIOD,
    payload,
  ), */
};

export type CostsActionsUnion = ActionsUnion<
  typeof CostsActions>;
