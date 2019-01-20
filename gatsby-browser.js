import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';
import { theme } from './src/theme/theme';
import DashboardNav from './src/routing/DashboardNav';
import SideNav from './src/routing/SideNav';
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {element}
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => {
  const { dashboardNav, sideNav } = props.pageContext;
  return (
    <>
      {dashboardNav && <DashboardNav />}
      {sideNav && <SideNav vert />}
      {element}
    </>
  );
};
