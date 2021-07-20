import React, { memo } from 'react';
import {
  BrowserRouter,
  Switch,
} from 'react-router-dom';

import { mapRoutes } from './utils';
import { ROUTE } from './routes';

const RouterMap: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {mapRoutes(ROUTE)}
    </Switch>
  </BrowserRouter>
);
export default memo(RouterMap);
