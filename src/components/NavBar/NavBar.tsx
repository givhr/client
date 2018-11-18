import React from 'react';
import styled from '../../theme/styledComponent';
import { INavBar } from './types';
import { VNav, HNav } from '../../constants';

export const NavBar = styled<INavBar, 'nav'>('nav')`
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ vert }) => vert && 'column'};
  box-shadow: ${({ vert, theme }) => (vert ? theme.boxShadowVerticalNav : theme.boxShadowHorizontalNav)};
`;
