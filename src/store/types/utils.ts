import { Color } from '@material-ui/lab/Alert';

export enum UtilsActionTypes {
  OPEN_NOTIFICATION = 'OPEN_NOTIFICATION',
  CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION',
  CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION',
}

export interface NotificationTypes {
  type: Color;
  text: string;
}

export interface Pagination {
  currentPage: number;
  date?: string;
  dateStart? : number;
  dateEnd?: number;
  limit?: number;
  totalPages?: number;
}
