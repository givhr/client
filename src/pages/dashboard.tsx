import React, { Fragment } from 'react';
import NavBar from '../components/NavBar';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Image from '../components/Image';
import { Link } from '../components/Link';
import { ThemeColors } from '../theme/colors/colors';
import Button from '../components/Button';
import { Card } from '../components/Card/Card';
import Container from '../Layouts/DashboardLayout';
import FormItem from '../components/FormItem';
import { FormInput } from '../components/Input/Input';

//Look into Prefixing gatsby package --- Chrome adds " / " to URL path
const Dashboard: React.FunctionComponent = () => (
  <Fragment>
    <NavBar vert={false}>
      <Image src={GivhrLogo} height={'42px'} p={'50px'} m={'75px'} />
      <Link to="/dashboard" activeStyle={{ color: ThemeColors.primary14 }}>
        Dashboard
      </Link>
      <Link to="">Templates (Coming Soon)</Link>
    </NavBar>
    <NavBar vert={true}>
      <Button height={'44px'} width={'150px'} m={'40px'}>
        New Giveaway
      </Button>
    </NavBar>
    <Container>
      <FormItem active={true}>
        <Card>Add Giveaway</Card>
      </FormItem>
      <FormInput />
    </Container>
  </Fragment>
);

export default Dashboard;
