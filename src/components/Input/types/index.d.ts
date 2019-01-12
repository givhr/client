import ITheme from '../../../theme';

export interface IInput extends ITheme {
  type?: React.InputHTMLAttributes<string>;
  placeholder?: React.InputHTMLAttributes<string>;
}
