import React, { Fragment } from 'react';
import {
  SurveyCardContainer,
  InnerCard,
  SurveyNav,
  SurveyNavItemWrap
} from '../../components/Card/SurveyCard/SurveyCard';
import { Link } from '../../components/Link';
import Button from '../../components/Button';
import FormItem from '../../components/FormItem';
import { FormInput } from '../../components/Input/Input';

const CreateSurvey: React.FunctionComponent = () => (
  <Fragment>
    <SurveyCardContainer>
      <InnerCard>
        <h2>New Giveaway!</h2>
        <FormItem active={true}>
          <FormInput />
        </FormItem>
      </InnerCard>
      <SurveyNav>
        <SurveyNavItemWrap>
          <h3>1. General Information</h3>
          <h3>2. Timeframe</h3>
          <h3>3. Entry Requirements</h3>
          <h3>4. Preview & Submit</h3>
        </SurveyNavItemWrap>
        <Button active={true} height={'44px'} width={'100%'}>
          Next
        </Button>
        <Button height={'44px'} width={'100%'}>
          Back
        </Button>
        <h5>Save For Later</h5>
      </SurveyNav>
    </SurveyCardContainer>
  </Fragment>
);

export default CreateSurvey;
