import React from 'react';
import { ReactComponent as AppleIcon } from '../../icons/greenapple.svg';
import css from './UserAvatar.module.css';

const UserAvatar = () => {
  return (
    <div className={css.avatar}>
      <AppleIcon className={css.image} /> {}
    </div>
  );
};

export default UserAvatar;
