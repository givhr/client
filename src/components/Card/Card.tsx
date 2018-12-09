import styled from '../../theme/styledComponent';

export const Card = styled.div`
  width: 274px;
  display: flex;
  height: 205px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary14};
  box-shadow: ${({ theme }) => theme.boxShadowCard};
  background-color: ${({ theme }) => theme.primary1};
  border: ${({ theme }) => `2px solid ${theme.primary14}`};
  &:hover {
    cursor: pointer;
  }
`;
