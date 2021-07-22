import Login from 'pages/Login';
import { RedirectHoc } from 'utils/hocs';

import { ROUTES } from './constants';

export const ROUTE = [
  {
    path: ROUTES.login,
    component: RedirectHoc({ component: Login }),
    exact: true,
  },
];
