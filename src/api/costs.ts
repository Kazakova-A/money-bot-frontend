import axios, { AxiosError } from 'axios';

import { CostsRecord } from 'store/types/costs';
import getHeaders from 'utils/helpers/getHeaders';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const getCostsStatistic = async (): Promise<CostsRecord[]> => {
  try {
    const { data }: ResponseObject<CostsRecord[]> = await axios.get(
      ENDPOINTS.costs,
      { headers: getHeaders() },
    );

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
