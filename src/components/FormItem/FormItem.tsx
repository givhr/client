import styled from '../../theme/styledComponent';

export const FormItem = styled.div<{ active: boolean }>`
  width: 100%;
  position: relative;
  padding: 20px 46px 8px 41px;
  background: ${({ theme }) => theme.primary1};
  box-shadow: ${({ active, theme }) => active && theme.boxShadowCard};
`;
