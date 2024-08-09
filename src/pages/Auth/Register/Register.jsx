import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import axios from 'axios';
import Joi from 'joi';
import styles from './Register.module.css';
import orderFoodDesktop from '../../../assets/AuthPages/order-food-desktop.png';
import orderFoodTablet from '../../../assets/AuthPages/order-food-tablet.png';
import orderFoodMobile from '../../../assets/AuthPages/order-food-mobile.png';
import orderFoodDesktop2x from '../../../assets/AuthPages/order-food-desktop@x2.png';
import orderFoodTablet2x from '../../../assets/AuthPages/order-food-tablet@x2.png';
import orderFoodMobile2x from '../../../assets/AuthPages/order-food-mobile@x2.png';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required().label('Name'),
    email: Joi.string().email({ tlds: { allow: false } }).required().label('Email'),
    password: Joi.string().min(6).required().label('Password')
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name, email, password };
    const { error } = schema.validate(userData, { abortEarly: false });

    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    try {
      const response = await axios.post('https://goit-so-yummy-gr5-f200f807d84e.herokuapp.com/auth/register', userData);

      console.log('Full response:', response.data);
      console.log('Saving userName to localStorage:', response.data.data.name);
      localStorage.setItem('userName', response.data.data.name);
      console.log('Saved userName:', localStorage.getItem('userName'));

      navigate('/signin');
    } catch (error) {
      console.error('Error registering user:', error);
      setServerError('Registration failed. Please try again.');
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
        <div>
          <div className={styles.registerForm}>
            <h2 className={styles.title}>Registration</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <div className={styles.inputWrapper}>
                  <FiUser className={styles.icon} />
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                    placeholder="Name"
                  />
                  {errors.name && <div className={styles.error}>{errors.name}</div>}
                </div>
              </div>
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
                  {errors.email && <div className={styles.error}>{errors.email}</div>}
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
                  {errors.password && <div className={styles.error}>{errors.password}</div>}
                </div>
              </div>
              {serverError && <div className={styles.serverError}>{serverError}</div>}
              <button type="submit" className={styles.button}>Sign Up</button>
            </form>
          </div>
          <div className={styles.signInLink}>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};