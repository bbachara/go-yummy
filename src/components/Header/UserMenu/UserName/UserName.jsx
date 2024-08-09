import React from 'react';
import css from './UserName.module.css';

const UserName = ({ name }) => {
  return <span className={css.name}>{name}</span>;
};

export default UserName;
