import React, { memo } from 'react';
import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import GivhrLogo from '../../assets/images/givhr_text_logo.png';
import { ThemeColors } from '../../theme/colors/colors';
import { Link } from '../../components/Link';

const DashboardNav: React.FunctionComponent = () => (
  <NavBar>
    <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
    <Link to="/dashboard" activeStyle={{ color: ThemeColors.primary14, fontWeight: 'bold' }}>
      Dashboard
    </Link>
    <Link to="">Templates (Coming Soon)</Link>
  </NavBar>
);

export default memo(DashboardNav);
