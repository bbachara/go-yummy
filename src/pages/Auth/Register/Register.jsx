import React, { useState } from 'react';
import styles from './Register.module.css';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę do obsługi rejestracji, np. wysłać dane do API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
            placeholder="Name"
          />
        </div>
        <div className={styles.field}>
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
        <div className={styles.field}>
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
        <button type="submit" className={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};