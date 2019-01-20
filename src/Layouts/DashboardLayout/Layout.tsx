import React from 'react';
import styled from '../../theme/styledComponent';
import { DashboardNav } from '../../routing/DashboardNav';

export const DashboardLayout: React.FunctionComponent = ({ children }) => (
  <>
    <DashboardNav />
    {children}
  </>
);

export const DashboardContainer = styled.section`
  position: absolute;
  background: seashell;
  top: 80px;
  left: 208px;
  height: ${`calc(${'100vh - 80px'})`};
  width: ${`calc(${'100vw - 208px'})`};
  padding: 23px;
`;
