import React, { Fragment } from 'react';
import styled from '../../theme/styledComponent';
import { IInput } from './types';

export const FormInput: React.FunctionComponent = () => {
  return <Input type="text" placeholder={'What is the title of your giveaway?'} />;
};

const Input = styled<IInput, 'input'>('input')`
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
