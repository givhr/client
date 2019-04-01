import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from '../../theme/styledComponent';
import { StyledComponent } from 'styled-components';
import plusIcon from '../../assets/images/plus_icon.png';
import { getChannels } from '../../services/api';

export const FormDropDown: FunctionComponent<{ selected: string; options: any[]; title: string }> = ({
  selected,
  options,
  title
}) => {
  return (
    <>
      <h4>{title}</h4>
      <FormSelect>
        <h5>{selected}</h5>
      </FormSelect>
      {options.length > 0 && options.map((option) => <h5 key={option.id}>{option.name}</h5>)}
    </>
  );
};

export const FormSelect: StyledComponent<'div', {}> = styled.div`
  height: 28px;
  width: 150px;
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 1px solid ${({ theme }) => theme.primary14};

  &::after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: url(${plusIcon});
    position: absolute;
    height: 26px;
    width: 34px;
    right: -36px;
    top: -1px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid ${({ theme }) => theme.primary14};
  }

  h5 {
    margin-left: 16px;
    color: ${({ theme }) => theme.primary14};
  }
`;
