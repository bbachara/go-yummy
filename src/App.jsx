import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/Footer/theme';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Auth/Register/Register';
import { NotFound } from './components/NotFound/NotFound';
import css from './App.module.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/go-yummy">
        <div className={css.app}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};