// tslint:disable:jsx-no-lambda
import React from 'react';
import { LandingPage } from '../Layouts/IndexLayout';
import Image from '../components/Image';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Button from '../components/Button';
import { navigate } from 'gatsby';

const IndexPage: React.FunctionComponent = () => (
  <LandingPage>
    <div>
      <h1>
        Welcome to <Image src={GivhrLogo} height={'42px'} p={'10px'} />
      </h1>
      <Button onClick={() => navigate('dashboard')}>Dashboard</Button>
    </div>
  </LandingPage>
);

export default IndexPage;
