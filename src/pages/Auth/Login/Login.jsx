import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import styles from './Login.module.css';
import orderFood from '../../../assets/AuthPages/order-food-desktop.png';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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