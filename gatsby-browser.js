import React, { Fragment } from 'react';
// import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';

export const wrapRootElement = ({ element }) => (
  <Fragment>
    {element}
    <GlobalStyles />
  </Fragment>
);
