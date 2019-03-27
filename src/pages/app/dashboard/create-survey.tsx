// tslint:disable:jsx-no-lambda
import React, { useState } from 'react';
import Image from '../../../components/Image';
import Button from '../../../components/Button';
import styled from '../../../theme/styledComponent';
import FormItem from '../../../components/FormItem';
import { routePaths } from '../../../types/routing';
import Logo from '../../../assets/images/logo_lg.png';
import { FormInput, InputExample } from '../../../components/Input/Input';
import { GiveawayCard } from '../../../components/Card/GiveawayCard/GiveawayCard';

interface CreateSurveyProps {
  path: routePaths;
}

//FIXME: NEED TO RENAME THIS FILE CREATE - SURVEY
const CreateSurvey: React.FunctionComponent<CreateSurveyProps> = () => {
  const defaultTitle = 'New Giveaway!';

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    inFocus: null
  });

  // const [formItemFocus, setFormItemFocus] = useState()

  const updateFocusedItem = ({ name }) => {
    setFormData({
      ...formData,
      inFocus: name
    });
  };

  const updateFormData = ({ name, value }) =>
    setFormData({
      ...formData,
      [name]: value
    });

  const { title, description, inFocus } = formData;
  return (
    <SurveyContainer>
      <GiveawayCard>
        <InteractionWrap>
          <h1 style={{ height: '87px' }}>{title ? title : defaultTitle}</h1>
          <FormContainer autoComplete="off">
            <FormItem name="title" focused={inFocus === 'title'}>
              <FormInput
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onFocus={({ target }) => updateFocusedItem(target)}
                onChange={({ target }) => updateFormData(target)}
              />
              {inFocus === 'title' && (
                <InputExample>
                  <span>Need Examples?</span>
                  <ul>
                    <li>We need your feedback!</li>
                    <li>Weekly giveaway, win a $10 giveaway</li>
                    <li>Halloween Giveaway!</li>
                    <li>product team monthly giveaway!</li>
                  </ul>
                </InputExample>
              )}
            </FormItem>
            <FormItem name="description" focused={inFocus === 'description'}>
              <FormInput
                type="text"
                placeholder="Description"
                name="description"
                value={description}
                onFocus={({ target }) => updateFocusedItem(target)}
                onChange={({ target }) => updateFormData(target)}
              />
              {inFocus === 'description' && (
                <InputExample>
                  <div>
                    <span>Need Help?</span> Here are a few things to include:
                  </div>
                  <ul>
                    <li>How do people enter your giveaway?</li>
                    <li>What's required to enter?</li>
                    <li>How many winners will there be?</li>
                    <li>When does the giveaway end?</li>
                  </ul>
                </InputExample>
              )}
            </FormItem>
            <ImageWrapper>
              <Image src={Logo} height={'42px'} />
            </ImageWrapper>
          </FormContainer>
        </InteractionWrap>
        <NavContainer>
          <div>
            <h3>1. General Information</h3>
            <h3>2. Scheduling</h3>
            <h3>3. Build Survey</h3>
            <h3>4. Preview Post</h3>
            <h3>5. Preview Survey</h3>
          </div>
          <ButtonContainer>
            <Button height="auto" width="230px">
              Next
            </Button>
            <Button height="auto" width="230px" m="16px">
              Back
            </Button>
            <h5>Save For Later</h5>
          </ButtonContainer>
        </NavContainer>
      </GiveawayCard>
    </SurveyContainer>
  );
};

export default CreateSurvey;

const FormContainer = styled.form`
  overflow: scroll;
  max-height: 88%;
`;

const SurveyContainer = styled.section`
  top: 160px;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
`;

const InteractionWrap = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  background-color: white;
  border-radius: 6px;
  h1 {
    padding: 25px 0 25px 40px;
    color: ${({ theme }) => theme.primary14};
    border-bottom: ${({ theme }) => `1px solid ${theme.primary4}`};
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 5px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding-left: 32px;
  h3 {
    color: ${({ theme }) => theme.primary1};
    padding: 24px 0 30px;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  align-self: flex-end;
  text-align: center;
  h5 {
    padding: 12px;
    margin-right: 20px;
    color: white;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
