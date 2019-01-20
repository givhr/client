import { IButton } from './types';
import styled from '../../theme/styledComponent';

export const Button = styled.button<IButton>`
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
  margin-top: ${({ m }) => m};
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primary1};
    background: ${({ theme }) => theme.primary12};
    transition: background 0.2s, transform 0.2s;
  }
`;
