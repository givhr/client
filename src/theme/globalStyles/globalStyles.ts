import { createGlobalStyle } from 'styled-components';
import { CSSReset } from './CSSReset';
import { ThemeColors } from '../colors/colors';
import { Font } from '../fonts/fonts';

export const GlobalStyles = createGlobalStyle`
  ${CSSReset};
  html, body {
    font-family: ${Font};
    color: black;
    background-color: ${ThemeColors.offWhite};
  }
`;
