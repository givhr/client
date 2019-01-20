import React, { Fragment } from 'react';
import styled from '../../theme/styledComponent';
import { IInput } from './types';
//todo: NEED TO PASS TYPE & PLACEHOLDER VIA PROPS
export const FormInput: React.FunctionComponent = () => {
  return <Input type="text" placeholder={'What is the title of your giveaway?'} />;
};
//FIXME:  const Input = styled.input<IInput>`
const Input = styled.input`
  font-size: 20px;
  width: 100%;
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.primary14};
  margin-left: 18px;
  &::before {
    content: '';
    height: 10px;
  }
  &::placeholder {
    color: ${({ theme }) => theme.primary5};
  }
`;