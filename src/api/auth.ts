import axios, { AxiosError } from 'axios';

import { ConfirmLoginReq, ConfirmLoginSuccess } from 'store/types/auth';
import { ErrorResponse, ResponseObject } from './types';
import ENDPOINTS from './endpoints';

export const sendConfirmationCode = async (name: string): Promise<any> => {
  try {
    const data = await axios.post(
      ENDPOINTS.login,
      {
        name,
      },
    );

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};

export const confirmLogin = async ({ name, token }: ConfirmLoginReq): Promise<ConfirmLoginSuccess> => {
  try {
    const { data }: ResponseObject<ConfirmLoginSuccess> = await axios.post(
      ENDPOINTS.confirmLogin,
      {
        name,
        token,
      },
    );

    return data;
  } catch (error) {
    const e = error as AxiosError<ErrorResponse>;
    throw new Error(e.response?.data?.message || '');
  }
};
