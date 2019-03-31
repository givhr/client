import React from 'react';
import styled from '../../theme/styledComponent';
import { Link as GatsbyLink } from 'gatsby';

export const Link = styled(GatsbyLink)`
  font-size: 20px;
  line-height: 32px;
  text-decoration: none;
  color: ${({ theme }) => theme.primary6};
  margin: 40px;
  &:active {
    color: white;
  }
`;
