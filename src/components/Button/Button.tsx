import styled from 'styled-components';
import { IButton } from './types';

export const Button = styled<IButton, 'button'>('button')`
  color: ${({ theme, active }) => (active ? theme.primary14 : theme.primary1)};
  background: ${({ theme, active }) => (active ? theme.primary1 : 'transparent')};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 12px;
  margin-top: ${({ m }) => m && m};
  border: 1px solid ${({ theme }) => theme.primary1};
  outline: none;
  &:hover {
    cursor: pointer;
    /* color: ${({ theme }) => theme.primary1};
    background: ${({ theme }) => theme.primary12}; */
    transition: background 0.1s, transform 0.2s;
    /* transform: scale(0.95); */
    transform-origin: center;
  }
`;
