import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import axios from 'axios';
import Joi from 'joi';
import styles from './Login.module.css';
import orderFood from '../../../assets/AuthPages/order-food-desktop.png';

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
      const response = await axios.post('https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/auth/login/', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
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
        <img src={orderFood} alt="Order Food" className={styles.orderFoodImage} />
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