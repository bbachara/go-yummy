import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import axios from 'axios';
import Joi from 'joi';
import styles from './Register.module.css';
import orderFood from '../../../assets/AuthPages/order-food-desktop.png';

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
      console.log('Response:', response.data);
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
        <img src={orderFood} alt="Order Food" className={styles.orderFoodImage} />
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