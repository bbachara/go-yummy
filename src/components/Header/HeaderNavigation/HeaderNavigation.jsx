import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';

const HeaderNavigation = ({ isMenuOpen, closeMenu }) => {
  return (
    <nav
      className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuActive : ''}`}
    >
      <Link to="/categories" className={styles.navLink} onClick={closeMenu}>
        Categories
      </Link>
      <Link to="/add-recipes" className={styles.navLink} onClick={closeMenu}>
        Add recipes
      </Link>
      <Link to="/my-recipes" className={styles.navLink} onClick={closeMenu}>
        My recipes
      </Link>
      <Link to="/favorites" className={styles.navLink} onClick={closeMenu}>
        Favorites
      </Link>
      <Link to="/shopping-list" className={styles.navLink} onClick={closeMenu}>
        Shopping list
      </Link>
      <Link to="/search" className={styles.navLink} onClick={closeMenu}>
        Search
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
