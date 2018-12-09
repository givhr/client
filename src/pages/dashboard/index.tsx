import React, { Fragment } from 'react';
import { Link } from '../../components/Link';
import { Card } from '../../components/Card/Card';

//Look into Prefixing gatsby package --- Chrome adds " / " to URL path
const Dashboard: React.FunctionComponent = () => (
  <Fragment>
    <Link to="dashboard/create-survey">
      <Card>Add Giveaway</Card>
    </Link>
  </Fragment>
);

export default Dashboard;
