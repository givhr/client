import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Image from '../components/Image';
import { Link } from '../components/Link';
import { ThemeColors } from '../theme/colors/colors';
import Button from '../components/Button';

const Dashboard: React.FunctionComponent = () => (
  <Fragment>
    <NavBar vert={false}>
      <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
      <Link to="/dashboard" activeStyle={{ color: ThemeColors.primary14 }}>
        Dashboard
      </Link>
      <Link to="">Templates (Coming Soon)</Link>
    </NavBar>
    <NavBar vert={true}>
      <Button height={'44px'} width={'150px'} m={'40px'}>
        New Giveaway
      </Button>
    </NavBar>
  </Fragment>
);

export default Dashboard;
