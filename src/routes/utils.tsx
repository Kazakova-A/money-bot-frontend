import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

export const mapRoutes = (routes: RouteProps[]): React.ReactNode => (
  routes.map((route: RouteProps) => <Route key={route.path as string} {...route} />)
);
