import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './SearchNavLink.module.css';
import MagnifyinGlass from '../MagnifyinGlass/MagnifyinGlass';

const SearchNavLink = ({ to, title, closeMenu = () => {} }) => {
  return (
    <NavLink
      to={to}
      onClick={() => closeMenu()}
      className={({ isActive }) =>
        `${css.navLink} ${isActive ? css.activeLink : ''}`
      }
    >
      <div className={css.glassWrapper}>
        <MagnifyinGlass />
      </div>
      <span className={css.title}>{title}</span>
    </NavLink>
  );
};

export default SearchNavLink;
