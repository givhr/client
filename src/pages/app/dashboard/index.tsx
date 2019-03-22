import React, { Fragment } from 'react';
import { Link } from '../../../components/Link';
import { Card } from '../../../components/Card/Card';
import DashboardContainer from '../../../Layouts/DashboardLayout';
import posed from 'react-pose';
import { routePaths } from '../../../types/routing';
import CreateSurvey from '././create-giveaway';
import { Router } from '@reach/router';

//Look into Prefixing gatsby package --- Chrome adds " / " to URL path
const ItemContainer = posed.section({
  enter: { staggerChildren: 50 }
});

const Item = posed.div({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});

interface DashboardProps {
  path: string;
}

const Dashboard: React.FunctionComponent<DashboardProps> = (props) => (
  <>
    <DashboardContainer>
      <ItemContainer>
        <Item key={'dallin'}>
          <Link to="app/dashboard/create-giveaway">
            <Card>Add Giveaway</Card>
          </Link>
        </Item>
        <Item key={'parker'}>
          <Link to="app/dashboard/create-giveaway">
            <Card>Add Giveaway</Card>
          </Link>
        </Item>
        <Item key={'mikayda'}>
          <Link to="app/dashboard/create-giveaway">
            <Card>Add Giveaway</Card>
          </Link>
        </Item>
        <Item key={'mills'}>
          <Link to="app/dashboard/create-giveaway">
            <Card>Add Giveaway</Card>
          </Link>
        </Item>
      </ItemContainer>
    </DashboardContainer>
  </>
);

export default Dashboard;
