import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';
import { Provider } from 'react-redux';
import { theme } from './src/theme/theme';
import DashboardNav from './src/routing/DashboardNav';
import SideNav from './src/routing/SideNav';
import posed, { PoseGroup } from 'react-pose';
import { store } from './src/state';

const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        {element}
        <GlobalStyles />
      </>
    </ThemeProvider>
  </Provider>
);

// export const wrapPageElement = ({ element, props }) => {
//   const { dashboardNav, sideNav } = props.pageContext;
//   return (
//     <>
//       {dashboardNav && <DashboardNav />}
//       {sideNav && <SideNav vert />}
//       {element}
//     </>
//   );
// };

// export const replaceComponentRenderer = ({ props, ...other }) => {
//   const { component } = props.pageResources;
//   return (
//     <PoseGroup>
//       <Transition key={props.location.key}>{React.createElement(component, props)}</Transition>
//     </PoseGroup>
//   );
// };
