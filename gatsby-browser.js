import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';
import { theme } from './src/theme/theme';
import NavBar from './src/components/NavBar';
import GivhrLogo from './src/assets/images/givhr_text_logo.png';
import Image from './src/components/Image';
import { Link } from './src/components/Link';
import { ThemeColors } from './src/theme/colors/colors';
import Button from './src/components/Button';
import DashboardContainer from './src/Layouts/DashboardLayout';
import SurveyContainer from './src/Layouts/SurveyLayout';
import PageTransition from 'gatsby-plugin-page-transitions';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {element}
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);

export const wrapPageElement = ({ element, props }) => {
  return (
    <Fragment>
      <NavBar vert={false}>
        <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
        <Link to="/dashboard" activeStyle={{ color: ThemeColors.primary14 }}>
          Dashboard
        </Link>
        <Link to="">Templates (Coming Soon)</Link>
      </NavBar>
      {!props.location.pathname.match('/create-survey') && (
        <PageTransition>
          <NavBar vert={true}>
            <Button height={'44px'} width={'150px'} m={'40px'}>
              New Giveaway
            </Button>
          </NavBar>
        </PageTransition>
      )}
      {props.location.pathname.match('/dashboard/create-survey') && (
        <SurveyContainer {...props}>{element}</SurveyContainer>
      )}
      {/* {props.location.pathname.match('/dashboard') && (
        <DashboardContainer {...props}>{element}</DashboardContainer>
      )} */}
    </Fragment>
  );
};
