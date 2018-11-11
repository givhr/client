import React, { Fragment } from 'react';
import styled from 'styled-components';
// import { CSSReset } from '../theme/CSSReset';

const IndexPage: React.SFC = () => (
  // <ThemeProvider theme={theme}>
  <Fragment>
    <h1>HELLO WORLD</h1>
    <button>click me</button>
  </Fragment>
  // </ThemeProvider>
);

export default IndexPage;

// const Layout = styled.div`
//   font-family: 'Helvetica';
//   font-size: 100px;
//   color: green;
// `;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    name: 'palevioletred'
  }
};

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen'
};
