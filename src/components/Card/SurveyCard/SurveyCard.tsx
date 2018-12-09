import styled from 'styled-components';

export const SurveyCard = styled.div`
  height: 70vh;
  width: 45vw;
  min-width: 45vw;
  background-color: ${({ theme }) => theme.primary12};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadowCard};
  padding: 16px 17px;
`;
