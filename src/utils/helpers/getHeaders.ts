import { getToken } from './tokens';

export default function getHeaders(): object {
  const token = getToken();
  return ({
    authorization: `Bearer ${token || ''}`,
  });
}
