import React, { memo } from 'react';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';

const SideNav: React.FunctionComponent = () => (
  <NavBar vert>
    <Button height={'44px'} width={'150px'} m={'40px'}>
      New Giveaway
    </Button>
  </NavBar>
);

export default memo(SideNav);
