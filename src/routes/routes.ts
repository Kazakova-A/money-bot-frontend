import Login from 'src/pages/Login';
import { RedirectHoc } from 'src/utils/hocs';

import { ROUTES } from './constants';

export const ROUTE = [
  {
    path: ROUTES.login,
    component: RedirectHoc({ component: Login }),
    exact: true,
  },
];
