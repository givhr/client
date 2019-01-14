import styled from '../../theme/styledComponent';
import { Link as GatsbyLink } from 'gatsby';

export const Link = styled(GatsbyLink)`
  font-size: 20px;
  line-height: 32px;
  text-decoration: none;
  font-weight: ${({ activeStyle }) => activeStyle && 'bold'};
  color: ${({ theme }) => theme.primary6};
  margin-right: 40px;
  &:active {
    color: white;
  }
`;
