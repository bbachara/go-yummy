import React from 'react';
import { ReactComponent as MobMenuBtn } from '../../icons/hamburger.svg';
import css from './MobMenuBurgerBtn.module.css';

const MobMenuBurgerBtn = ({ openMenu }) => {
  return (
    <button className={css.button} onClick={openMenu}>
      <MobMenuBtn className={css.svg} />
    </button>
  );
};

export default MobMenuBurgerBtn;
