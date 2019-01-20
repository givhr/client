import React, { Fragment } from 'react';
import { Link } from '../../components/Link';
import { Card } from '../../components/Card/Card';
import DashboardContainer from '../../Layouts/DashboardLayout';

//Look into Prefixing gatsby package --- Chrome adds " / " to URL path
const Dashboard: React.FunctionComponent = () => (
  <Fragment>
    <DashboardContainer>
      <Link to="dashboard/create-giveaway">
        <Card>Add Giveaway</Card>
      </Link>
    </DashboardContainer>
  </Fragment>
);

export default Dashboard;
