import React from 'react';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { Footer } from './components/Footer/Footer';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <HomePage />
      <WelcomePage />
      <Footer />
    </div>
  );
};
