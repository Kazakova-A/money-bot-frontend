import { Pagination } from 'store/types/utils';

export interface CostsState {
  list: any[];
  isLoading: boolean;
  pagination: Pagination;
}
