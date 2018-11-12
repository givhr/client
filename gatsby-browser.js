import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';
import { theme } from './src/theme/theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {element}
      <GlobalStyles />
    </Fragment>
  </ThemeProvider>
);
