import React, { Fragment } from 'react';
import NavContainer from '../../components/NavBar';
import Image from '../../components/Image';
import GivhrLogo from '../../assets/images/givhr_text_logo.png';
import Button from '../../components/Button';
import { Link } from '../../components/Link';
import { Routes } from '../routes';

export const DashboardNav: React.FunctionComponent = () => {
  return (
    <>
      <NavContainer>
        <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
        {Object.keys(Routes.dashboard).map((route) => {
          console.log(route);

          return (
            <Fragment key={route}>
              <Link to={Routes.dashboard[route].to} activeStyle={Routes.dashboard[route].activeSytle}>
                {Routes.dashboard[route].text}
              </Link>
            </Fragment>
          );
        })}
      </NavContainer>
      <NavContainer vert>
        <Button>New Giveaway</Button>
      </NavContainer>
    </>
  );
};
