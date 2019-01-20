import React, { Fragment } from 'react';
import { Link } from '../../components/Link';
import { Card } from '../../components/Card/Card';
import { DashboardNav } from '../../routing/DashboardNav';
import { DashboardLayout } from '../../Layouts/DashboardLayout/Layout';

//Look into Prefixing gatsby package --- Chrome adds " / " to URL path
const Dashboard: React.FunctionComponent = (props: any) => {
  console.log('props on dashboard: ', props);

  return (
    <DashboardLayout>
      <Link to="dashboard/create-giveaway">
        <Card>Add something</Card>
      </Link>
    </DashboardLayout>
  );
};
export default Dashboard;
