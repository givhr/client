import React, { Fragment } from 'react';
// import { Link } from 'gatsby';
import { NavBar } from '../components/NavBar/NavBar';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Image from '../components/Image';
import { Link } from '../components/Link';
import { ThemeColors } from '../theme/colors/colors';

const Dashboard: React.FunctionComponent = () => (
  <Fragment>
    <NavBar height={'80px'} vert={false}>
      <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
      <Link to="/dashboard" activeStyle={{ color: ThemeColors.primary14 }}>
        Dashboard
      </Link>
      <Link to="">Templates (Coming Soon)</Link>
    </NavBar>
  </Fragment>
);

export default Dashboard;
