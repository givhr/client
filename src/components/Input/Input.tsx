import React, { Fragment } from 'react';
import styled from '../../theme/styledComponent';
import { IInput } from './types';
import { StyledComponent } from 'styled-components';
//todo: NEED TO PASS TYPE & PLACEHOLDER VIA PROPS
// export const FormInput: React.FunctionComponent<IInput> = ({ type = 'text', placeholder = '', active }) => {
//   return <Input type={type} placeholder={placeholder} active={active} />;
// };

//FIXME:  const Input = styled.input<IInput>`
export const FormInput: StyledComponent<'input', IInput> = styled.input`
  color: ${({ theme }) => theme.primary8};
  font-size: 20px;
  width: 90%;
  border: none;
  outline: none;
  caret-color: ${({ theme }) => theme.primary14};
  border-left: 3px solid ${({ theme }) => theme.primary5};
  margin: 25px 0 0 40px;
  padding-left: 15px;
  border-radius: 2px;

  &::focus {
    border-left: 3px solid ${({ theme }) => theme.primary14};
    transition: all 0.4s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary5};
    margin: 7px;
  }
`;

export const InputExample: StyledComponent<'div', IInput> = styled.div`
  background-color: ${({ theme }) => theme.primary2};
  margin: 25px 0 25px 40px;
  padding: 12px 0 12px 20px;
  line-height: 20px;
  letter-spacing: 0.25px;
  font-size: 14px;
  color: ${({ theme }) => theme.primary8};
  border-radius: 4px;
  ul {
    li:before {
      content: '- ';
    }
  }
`;
