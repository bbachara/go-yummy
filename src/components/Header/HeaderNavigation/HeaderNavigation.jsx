import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation = ({ isMenuOpen }) => {
  return (
    <nav
      className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}
    >
      <Link to="/categories" className={styles.navLink}>
        Categories
      </Link>
      <Link to="/add-recipes" className={styles.navLink}>
        Add recipes
      </Link>
      <Link to="/my-recipes" className={styles.navLink}>
        My recipes
      </Link>
      <Link to="/favorites" className={styles.navLink}>
        Favorites
      </Link>
      <Link to="/shopping-list" className={styles.navLink}>
        Shopping list
      </Link>
      <Link to="/search" className={styles.navLink}>
        Search
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
