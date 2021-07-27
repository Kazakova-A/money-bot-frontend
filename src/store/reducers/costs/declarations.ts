import { Pagination } from 'store/types/utils';
import { CostsRecord } from 'store/types/costs';

export interface CostsState {
  list: CostsRecord[];
  isLoading: boolean;
  pagination: Pagination;
}
