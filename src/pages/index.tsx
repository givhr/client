// tslint:disable:jsx-no-lambda
import React from 'react';
import { LandingPage } from '../Layouts/IndexLayout';
import Image from '../components/Image';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Button from '../components/Button';
import { navigate } from 'gatsby';
import sentryLogger from '../components/SentryLogger';

const IndexPage: React.FunctionComponent = () => (
  <LandingPage>
    <>
      <h1>
        Welcome to <Image src={GivhrLogo} height={'42px'} p={'10px'} />
      </h1>
      <Button onClick={() => navigate('dashboard')}>Dashboard</Button>
    </>
  </LandingPage>
);

export default sentryLogger(IndexPage);
