import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/Footer/theme';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Auth/Register/Register';
import { Login } from './pages/Auth/Login/Login';
import { NotFound } from './pages/NotFoundPage/NotFound';
import css from './App.module.css';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/go-yummy">
        <div className={css.app}>
          <Routes> 
            <Route path="/" element={<WelcomePage />} />
            <Route path="/homepage" element={
              <>
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/register" element={
              <>
                <Register />
              </>
            } />
            <Route path="/signin" element={
              <>
                <Login />
              </>
            } />
            <Route path="*" element={
              <>
                <NotFound />
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};