import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { NavBar } from '../components/HorizontalNav/HorizontalNav';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Image from '../components/Image';

const Dashboard: React.FunctionComponent = () => (
  <Fragment>
    <NavBar>
      <Image src={GivhrLogo} height={'42px'} />
      <Link to="/">Dashboard</Link>
    </NavBar>
  </Fragment>
);

export default Dashboard;
