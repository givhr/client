import styled from '../../theme/styledComponent';

export const DashboardContainer = styled.section`
  border: 5px solid green;
  position: absolute;
  top: 80px;
  left: 208px;
  height: ${`calc(${'100vh - 80px'})`};
  width: ${`calc(${'100vw - 208px'})`};
  padding: 23px;
`;
