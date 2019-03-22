// tslint:disable:jsx-no-lambda
import React from 'react';
import Image from '../components/Image';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import { LandingPage } from '../Layouts/IndexLayout';
import Button from '../components/Button';
import { navigate } from 'gatsby';

const LoginPage: React.FunctionComponent = (props: any) => (
  <LandingPage>
    <div>
      <h1>
        Please login <Image src={GivhrLogo} height={'42px'} p={'10px'} />
      </h1>
      <Button onClick={() => navigate('/app/dashboard')}>Login</Button>
    </div>
  </LandingPage>
);

export default LoginPage;
