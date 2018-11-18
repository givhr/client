import React from 'react';
import styled from '../../theme/styledComponent';
import { Link } from 'gatsby';

export const NavBar = styled.nav`
  height: 80px;
  box-shadow: ${({ theme }) => theme.boxShadowHorizontalNav};
  display: flex;
  align-items: center;
`;
