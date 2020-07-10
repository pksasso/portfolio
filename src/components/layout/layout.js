import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </Wrapper>
  );
};

export default Layout;
