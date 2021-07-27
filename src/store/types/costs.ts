export enum CostsActionTypes {
  GET_COSTS_REQUEST = 'GET_COSTS_REQUEST',
  GET_COSTS_SUCCESS = 'GET_COSTS_SUCCESS',
  GET_COSTS_ERROR = 'GET_COSTS_ERROR',
}

export interface CostsRecord {
  title: string;
  type: string;
  sum: number;
  createdAt: string;
}
