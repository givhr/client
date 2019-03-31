import React from 'react';
import createStore from './src/state';
import { Provider } from 'react-redux';
import { theme } from './src/theme/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './src/theme/globalStyles/globalStyles';

export default ({ element }) => {
  const store = createStore();
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          {element}
          <GlobalStyles />
        </>
      </ThemeProvider>
    </Provider>
  );
};
