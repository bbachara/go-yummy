import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/Home';
import { WelcomePage } from './pages/WelcomePage/Welcome';
import { Footer } from './components/Footer/Footer';
import { Register } from './pages/Auth/Register/Register';
import css from './App.module.css';

export const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>

