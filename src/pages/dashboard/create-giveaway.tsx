import React from 'react';
import styled from '../../theme/styledComponent';
import { GiveawayCard } from '../../components/Card/GiveawayCard/GiveawayCard';

const CreateSurvey: React.FunctionComponent = () => (
  <SurveyContainer>
    <GiveawayCard>Hello</GiveawayCard>
  </SurveyContainer>
);

export default CreateSurvey;

const SurveyContainer = styled.section`
  top: 160px;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
`;
