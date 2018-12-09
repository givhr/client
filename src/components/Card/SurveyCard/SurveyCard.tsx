import styled from 'styled-components';

export const SurveyCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80vh;
  width: 53vw;
  min-width: 45vw;
  background-color: ${({ theme }) => theme.primary14};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadowCard};
  padding: 16px 17px;
`;

export const InnerCard = styled.div`
  background-color: ${({ theme }) => theme.primary1};
  height: 100%;
  width: 70%;
  border-radius: 6px;
  h2 {
    color: ${({ theme }) => theme.primary14};
    font-weight: bold;
    letter-spacing: 0.29px;
    padding: 31px 38px;
  }
`;

export const SurveyNav = styled.nav`
  height: 100%;
  width: 27%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h3 {
    color: ${({ theme }) => theme.primary1};
    margin-bottom: 38px;
  }
  h5 {
    color: ${({ theme }) => theme.primary1};
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      transition: all 0.75s linear;
    }
  }
`;

export const SurveyNavItemWrap = styled.div`
  height: 78%;
`;
