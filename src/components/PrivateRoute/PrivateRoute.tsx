import React from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Dashboard from '../../pages/app/dashboard';

interface PrivateRouterProps {
  path: string;
}

export const PrivateRouter: React.FunctionComponent<PrivateRouterProps> = ({ ...props }) => {
  // if (!authed && location.pathname !== `/app/login`) {
  //   navigate(`login`, { replace: true });
  //   return null;
  // }
  console.log('checking privacy');
  return <>{props.children}</>;
};
