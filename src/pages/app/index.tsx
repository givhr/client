import React from 'react';
import { Router } from '@reach/router';
import styled from '../../theme/styledComponent';
import PrivateRouter from '../../components/PrivateRoute';
import LoginPage from '../login';
import Dashboard from './dashboard';
import { routePaths } from '../../types/routing';
import CreateSurvey from './dashboard/create-giveaway';
import RouterWrap from '../../routing';

const Layout = styled.section`
  /* color: white; */
`;

export const App = () => (
  <Layout>
    <Router>
      <PrivateRouter path="/app/*">
        <RouterWrap path="dashboard/*">
          <Dashboard path="./" />
          <CreateSurvey path="./create-survey" />
        </RouterWrap>
      </PrivateRouter>
    </Router>
  </Layout>
);

export default App;
