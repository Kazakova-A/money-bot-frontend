import React, { memo } from 'react';
import { Switch } from 'react-router-dom';

import { mapRoutes } from './utils';
import { ROUTE } from './routes';

const RouterMap: React.FC = () => (
  <Switch>
    {mapRoutes(ROUTE)}
  </Switch>
);
export default memo(RouterMap);
