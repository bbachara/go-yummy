import React, { useState } from 'react';
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

  const user = {
    name: 'John Doe',
    avatar: '/path/to/avatar.jpg',
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles['header-content']}>
          <HeaderLogo />
          <HeaderNavigation />
          <MobMenuBurgerBtn openMenu={openMenu} />
          {isMenuOpen && <MobileNavMenu closeMenu={closeMenu} />}
          <UserMenu user={user} />
          <ThemeSwitcher />
        </div>
      </header>
    </div>
  );
};

export default Header;
