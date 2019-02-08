import React from 'react';
import { Link } from '../../components/Link';
import { Card } from '../../components/Card/Card';
import DashboardContainer from '../../Layouts/DashboardLayout';
import sentryLogger from '../../components/SentryLogger';

//Look into Prefixing gatsby package --- Chrome adds " / " to URL path
const Dashboard: React.FunctionComponent = () => (
  <>
    <DashboardContainer>
      <Link to="dashboard/create-giveaway">
        <Card>Add Giveaway</Card>
      </Link>
    </DashboardContainer>
  </>
);

export default sentryLogger(Dashboard);
