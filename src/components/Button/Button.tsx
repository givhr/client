import styled from 'styled-components';
import { IButton } from './types';

export const Button = styled<IButton, 'button'>('button')`
  color: ${({ theme }) => theme.purple};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
