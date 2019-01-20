import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';
import { theme } from './src/theme/theme';
import NavContainer from './src/components/NavBar';
import GivhrLogo from './src/assets/images/givhr_text_logo.png';
import Image from './src/components/Image';
import { Link } from './src/components/Link';
import { ThemeColors } from './src/theme/colors/colors';
import Button from './src/components/Button';
import DashboardContainer from './src/Layouts/DashboardLayout';
import { isPartiallyActive } from './src/helpers';
import { StaticQuery, Router } from 'gatsby';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {element}
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => {
  console.log('WRAP ELEMENT PROPS: ', props);
  return element;
  //   console.log(props.location.state);
  //   // NEED TO FIGURE OUT DEFAULT STATE FOR ROUTER
  //   // const { showTopNav = true, showVertNav = true } = props.location.state;
  //   return (
  //     <Fragment>
  //       <NavContainer show>
  //         <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
  //         <Link
  //           to="dashboard"
  //           state={{ showVertNav: true, showTopNav: true }}
  //           activeStyle={{ color: ThemeColors.primary14 }}>
  //           Dashboard
  //         </Link>
  //         <Link to="">Templates (Coming Soon)</Link>
  //       </NavContainer>
  //       <NavContainer vert show>
  //         <Button height={'44px'} width={'150px'} m={'40px'}>
  //           New Giveaway
  //         </Button>
  //       </NavContainer>
  //       {props.location.pathname.match('dashboard') && <DashboardContainer>{element}</DashboardContainer>}
  //     </Fragment>
  //   );
};
