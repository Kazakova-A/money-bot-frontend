import React from 'react';
import { Redirect } from 'react-router-dom';

import { ROUTES } from 'routes/constants';
import { getToken } from 'utils/helpers/tokens';

interface UseRedirectProps {
  component: React.FC;
  isPrivate?: boolean;
}

const RedirectHoc = ({
  isPrivate = false,
  component: Component,
}: UseRedirectProps) => (
  function Auth() {
    const isAuthenticated = getToken();
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
