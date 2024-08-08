import React, { useEffect } from 'react';
import css from './ConfirmModal.module.css';
import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';

const ConfirmModal = ({ onClose, onConfirm }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleLogoutBtnClick = () => {
    onConfirm();
    onClose();
  };

  return (
    <>
      <div className={css.overlay} onClick={onClose}></div>
      <div className={css.container}>
        <MobMenuCloseBtn closeMenu={onClose} />
        <span className={css.title}>Are you sure you want to log out?</span>
        <div className={css.btnWrp}>
          <button onClick={handleLogoutBtnClick} className={css.confirmBtn}>
            Log out
          </button>
          <button onClick={onClose} className={css.confirmBtnCurrent}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmModal;
