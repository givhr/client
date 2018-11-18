// import React from 'react';
import styled from '../../theme/styledComponent';
import { IImage } from './types';

export const Image = styled<IImage, 'img'>('img')`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding-left: ${({ p }) => p};
  margin-right: ${({ m }) => m};
`;
