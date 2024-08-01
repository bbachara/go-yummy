import React from 'react';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div>
      <HomePage />
      <WelcomePage />
      <Footer />
    </div>
  );
};
