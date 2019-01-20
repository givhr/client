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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
