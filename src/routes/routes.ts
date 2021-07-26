import Login from 'pages/Login';
import Costs from 'pages/Costs';
import { RedirectHoc } from 'utils/hocs';

import { ROUTES } from './constants';

export const ROUTE = [
  {
    path: ROUTES.login,
    component: RedirectHoc({ component: Login }),
    exact: true,
  },
  {
    path: ROUTES.costs,
    component: RedirectHoc({ component: Costs, isPrivate: true }),
    exact: true,
  },
];
