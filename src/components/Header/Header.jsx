import React, { useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import MobileNavMenu from './MobileNavMenu/MobileNavMenu';
import MobMenuBurgerBtn from './MobileNavMenu/MobMenuBurgerBtn/MobMenuBurgerBtn';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import UserMenu from './UserMenu/UserMenu';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const user = {
    name: 'John Doe',
    avatar: '/path/to/avatar.jpg',
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles['header-content']}>
          <HeaderLogo />
          <HeaderNavigation isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
          <UserMenu user={user} />
          <MobMenuBurgerBtn openMenu={openMenu} />
          {isMenuOpen && <MobileNavMenu closeMenu={closeMenu} />}
          <ThemeSwitcher />
        </div>
      </header>
    </div>
  );
};

export default Header;
