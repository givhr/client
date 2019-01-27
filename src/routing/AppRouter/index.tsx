import React, { ReactNode } from 'react';

interface AppRouterProps {
  children?: ReactNode;
  path: string;
}

export const AppRouter: React.FunctionComponent<AppRouterProps> = (props) => <>{props.children}</>;
