import React, { ReactNode } from 'react';

interface AppRouterProps {
  children?: ReactNode;
  path: string;
}

const AppRouter: React.FunctionComponent<AppRouterProps> = (props) => <>{props.children}</>;

export default AppRouter;
