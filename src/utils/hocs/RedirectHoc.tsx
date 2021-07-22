import React from 'react';
import { Redirect } from 'react-router-dom';

import { ROUTES } from 'routes/constants';

interface UseRedirectProps {
  component: React.FC;
  isPrivate?: boolean;
}

const RedirectHoc = ({
  isPrivate = false,
  component: Component,
}: UseRedirectProps) => (
  function Auth() {
    const isAuthenticated = true; // TODO: set getting token from localstorage
    if (!isAuthenticated) {
      if (isPrivate) {
        return <Redirect to={{ pathname: ROUTES.login }} />;
      }
      return <Component />;
    }
    return <Component />;
  }
);

export default RedirectHoc;
