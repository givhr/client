import styled from 'styled-components';

export const LandingPage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primary11};
  height: 100vh;
  width: 100vw;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  h1 {
    color: white;
    display: flex;
    align-items: center;
    text-decoration: underline;
    margin-bottom: 10px;
  }
`;
