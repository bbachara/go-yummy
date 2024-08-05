import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './MainNavLink.module.css';

const MainNavLink = ({ to, title, closeMenu = () => {} }) => {
  return (
    <NavLink
      to={to}
      onClick={() => closeMenu()}
      className={({ isActive }) =>
        `${css.navLink} ${isActive ? css.activeLink : ''}`
      }
    >
      {title}
    </NavLink>
  );
};

export default MainNavLink;
