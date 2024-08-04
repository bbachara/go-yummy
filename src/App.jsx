import React from 'react';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { ThemeProvider } from '@emotion/react';
import { Footer } from './pages/Footer/Footer';
import { theme } from './pages/Footer/theme';

export const App = () => {
  return (
    <>
      <HomePage />
      <WelcomePage />
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    </>
  );
};
