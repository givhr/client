import styled from '../../theme/styledComponent';

export const FormItem = styled.div<{ active: boolean; focused: boolean }>`
  width: 100%;
  position: relative;
  min-height: 64px;
  padding: 0 46px 8px 0;
  background: ${({ theme }) => theme.primary1};
  box-shadow: ${({ focused, theme }) => focused && theme.boxShadowCard};
  margin-bottom: 5px;
`;
