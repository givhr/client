import { Theme } from '.';
import { ThemeColors } from './colors/colors';
import { Font } from './fonts/fonts';

export const theme: Theme = {
  font: Font,
  purple: ThemeColors.purple
};

// import styled, { createGlobalStyle } from 'styled-components';

// // Define our button, but with the use of props.theme this time
// // const Button = styled.button`
// //   /* Color the border and text with theme.main */
// //   color: ${(props) => props.theme.main};
// //   border: 2px solid ${(props) => props.theme.main};
// // `;

// // // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
// // Button.defaultProps = {
// //   theme: {
// //     name: 'palevioletred'
// //   }
// // };

// // // Define what props.theme will look like
// // const theme = {
// //   main: 'mediumseagreen'
// // };
