'use client'
import React from 'react';
import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';
import Layout from '@/components/Layout';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('react95/dist/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('react95/dist/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
    height: 100vh;
  }
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Layout>
        <h1>Green Owl Society</h1>
      </Layout>
    </ThemeProvider>
  </div>
);

export default App;