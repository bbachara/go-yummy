import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import axios from 'axios';
import Joi from 'joi';
import styles from './Login.module.css';
import orderFoodDesktop from '../../../assets/AuthPages/order-food-desktop.png';
import orderFoodTablet from '../../../assets/AuthPages/order-food-tablet.png';
import orderFoodMobile from '../../../assets/AuthPages/order-food-mobile.png';
import orderFoodDesktop2x from '../../../assets/AuthPages/order-food-desktop@x2.png';
import orderFoodTablet2x from '../../../assets/AuthPages/order-food-tablet@x2.png';
import orderFoodMobile2x from '../../../assets/AuthPages/order-food-mobile@x2.png';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(6).required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setServerError('');

    try {
      await schema.validateAsync({ email, password }, { abortEarly: false });
      const response = await axios.post('https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/auth/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      console.log('Full response:', response.data);
      console.log('Saving userName to localStorage:', response.data.data.name);
      localStorage.setItem('userName', response.data.data.name);
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);
      console.log('Saved userName:', localStorage.getItem('userName'));
      console.log('Saved token:', localStorage.getItem('token'));
      console.log('Saved refreshToken:', localStorage.getItem('refreshToken'));

      navigate('/homepage');
    } catch (error) {
      if (error.name === 'ValidationError') {
        setError('Email and password must be valid.');
      } else if (error.response) {
        setServerError('Invalid email or password.');
      } else {
        setServerError('There was a problem with login. Please try again.');
      }
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backgroundSpacer}></div>
      <div className={styles.backgroundImage}></div>
      <div className={styles.container}>
        <picture>
          <source media="(min-width: 1440px)" srcSet={`${orderFoodDesktop} 1x, ${orderFoodDesktop2x} 2x`} />
          <source media="(min-width: 768px) and (max-width: 1439px)" srcSet={`${orderFoodTablet} 1x, ${orderFoodTablet2x} 2x`} />
          <source media="(max-width: 767px)" srcSet={`${orderFoodMobile} 1x, ${orderFoodMobile2x} 2x`} />
          <img src={orderFoodMobile} alt="Order Food" className={styles.orderFoodImage} />
        </picture>
        <div className={styles.formContainer}>
          <div className={styles.registerForm}>
            <h2 className={styles.title}>Sign In</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <div className={styles.inputWrapper}>
                  <FiMail className={styles.icon} />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className={styles.field}>
                <div className={styles.inputWrapper}>
                  <FiLock className={styles.icon} />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={styles.input}
                    placeholder="Password"
                  />
                </div>
              </div>
              {(error || serverError) && (
                <div className={styles.errorContainer}>
                  {error || serverError}
                </div>
              )}
              <button type="submit" className={styles.button}>Sign In</button>
            </form>
          </div>
          <div className={styles.registrationLink}>
            <Link to="/register">Registration</Link>
          </div>
        </div>
      </div>
    </div>
  );
};