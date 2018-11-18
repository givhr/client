import React from 'react';
import styled from '../../theme/styledComponent';

export const NavBar = styled<{ vert: boolean }, 'nav'>('nav')`
  display: flex;
  align-items: center;
  width: ${({ vert }) => (vert ? '208px' : '100%')};
  height: ${({ vert }) => (vert ? `calc(${'100vh - 80px'})` : '80px')};
  flex-direction: ${({ vert }) => vert && 'column'};
  justify-content: ${({ vert }) => vert && 'space-between'};
  background-color: ${({ vert, theme }) => (vert ? theme.primary14 : theme.primary1)};
  box-shadow: ${({ vert, theme }) => (vert ? theme.boxShadowVerticalNav : theme.boxShadowHorizontalNav)};
`;
