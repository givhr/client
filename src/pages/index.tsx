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
import DashboardNav from '../routing/DashboardNav';
import DashboardContainer from '../Layouts/DashboardLayout';
import SideNav from '../routing/SideNav';
import { Card } from '../components/Card/Card';
import { Link } from '../components/Link';

const IndexPage: React.FunctionComponent = (props) => {
  //TODO: this is where I would fetch surveys and map over them to create these links / CARDS
  return (
    <>
      <DashboardNav />
      <SideNav />
      <DashboardContainer>
        <Link to="app/dashboard/create-survey/2343">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
        <Link to="app/dashboard/create-survey">
          <Card>Add Giveaway</Card>
        </Link>
      </DashboardContainer>
    </>
  );
};

const mapStateToProps = (state: any) => ({ state });

export default connect(mapStateToProps)(IndexPage);
