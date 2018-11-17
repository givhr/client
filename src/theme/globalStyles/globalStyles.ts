import { createGlobalStyle } from 'styled-components';
import { CSSReset } from './CSSReset';
import { ThemeColors } from '../colors/colors';
import { Font } from '../fonts/fonts';

export const GlobalStyles = createGlobalStyle`
  ${CSSReset};
  html, body {
    font-family: ${Font};
    color: black;
    background-color: ${ThemeColors.primary1};
  }
  h1 {
    font-size: 32px;
    line-height: 36px;
  }
  h2 {
    font-size: 24px;
    line-height: 32px;
  }
  h3 {
    font-size: 20px;
    line-height: 24px;
  }
  h4 {
    font-size: 16px;
    line-height: 20px;
  }
  h5 {
    font-size: 12px;
    line-height: 16px;
  }
`;
