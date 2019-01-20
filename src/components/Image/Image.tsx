// import React from 'react';
import styled from '../../theme/styledComponent';
import { IImage } from './types';

export const Image = styled.img<IImage>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding-left: ${({ p }) => p};
  margin-right: ${({ m }) => m};
`;
