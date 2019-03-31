// tslint:disable:jsx-no-lambda
import React from 'react';
import { LandingPage } from '../Layouts/IndexLayout';
import Image from '../components/Image';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Button from '../components/Button';
import { getSurveys, updateSurvey } from '../services/api';
import { connect } from 'react-redux';
import { testAppAction } from '../state/actions/appActions/actions';
import { Router } from '@reach/router';
import PrivateRouter from '../components/PrivateRoute';

const IndexPage: React.FunctionComponent = (props) => {
  console.log('PROPS: ', props);
  return (
    <LandingPage>
      <h1>hello world</h1>
    </LandingPage>
  );
};

const mapStateToProps = (state: any) => ({ state });

export default connect(mapStateToProps)(IndexPage);
