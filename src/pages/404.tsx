import React from 'react';
import styled from 'styled-components';

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;

const Layout = styled.div`
  background: lightblue;
  color: red;
`;
