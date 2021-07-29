/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios, { AxiosError } from 'axios';

import { CostsRecord } from 'store/types/costs';
import getHeaders from 'utils/helpers/getHeaders';

import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

// TODO: set parameterst types when it will be known
export const getCostsStatistic = async ({ sortType = '' }: any): Promise<CostsRecord[]> => {
  try {
    const { data }: ResponseObject<CostsRecord[]> = await axios.get(
      `${ENDPOINTS.costs}?type=${sortType}`,
      { headers: getHeaders() },
    );

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
