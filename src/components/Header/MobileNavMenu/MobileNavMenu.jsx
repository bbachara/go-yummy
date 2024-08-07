import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import css from './MobileNavMenu.module.css';
import MobMenuCloseBtn from './MobMenuCloseBtn/MobMenuCloseBtn';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/SVG/Logo/logo.svg';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const MobileNavMenu = ({ closeMenu }) => {
  return (
    <div className={css.container}>
      <div className={css.topBar}>
        <Link to="/main" className={css.logoWrapper}>
          <Logo className={css.logo} />
        </Link>
        <MobMenuCloseBtn className={css.mobNavBtn} closeMenu={closeMenu} />
      </div>
      <div className={css.navContent}>
        <HeaderNavigation isMenuOpen={true} closeMenu={closeMenu} />
        <ThemeSwitcher className={css.themeSwitcher} />
      </div>
    </div>
  );
};

export default MobileNavMenu;
