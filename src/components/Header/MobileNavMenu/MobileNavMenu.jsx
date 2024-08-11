import React from 'react';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import css from './MobileNavMenu.module.css';
import MobMenuCloseBtn from './MobMenuCloseBtn/MobMenuCloseBtn';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/SVG/Logo/logo.svg';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const MobileNavMenu = ({ closeMenu }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    closeMenu();
    navigate('/homepage');
  };

  return (
    <div className={css.container}>
      <div className={css.topBar}>
        <div onClick={handleLogoClick} className={css.logoWrapper}>
          <Logo className={css.logo} />
        </div>
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
