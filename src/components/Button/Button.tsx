import styled from 'styled-components';
import { IButton } from './types';

export const Button = styled<IButton, 'button'>('button')`
  color: ${({ theme }) => theme.primary14};
  background: ${({ theme }) => theme.primary1};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 12px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary1};
    background: ${({ theme }) => theme.primary14};
    transition: color 0.2s, background 0.2s, transform 0.2s;
    transform: scale(0.95);
  }
`;
