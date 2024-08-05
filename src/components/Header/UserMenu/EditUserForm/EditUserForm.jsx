import React, { useEffect, useRef, useCallback, useState } from 'react';
import css from './EditUserForm.module.css';
import { ReactComponent as EditPen } from '../../icons/editPen.svg';
import UserArrowSvg from 'components/Header/UserMenu/UserArrowSvg/UserArrowSvg';
import UserMenuModalForm from 'components/Header/UserMenu/UserMenuModalForm/UserMenuModalForm';

const EditUserForm = ({ closeModal, container }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const rect = container.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const style = {
    top: `${Math.round(rect.bottom + 15)}px`,
    right: `${Math.round(viewportWidth - rect.right)}px`,
  };

  const modalRef = useRef(null);

  useEffect(() => {
    console.log('EditUserForm mounted');
    return () => console.log('EditUserForm unmounted');
  }, []);

  useEffect(() => {
    console.log('isUserMenuOpen:', isUserMenuOpen);
  }, [isUserMenuOpen]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleClickOutside = useCallback(
    e => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleKeyDown, handleClickOutside]);

  const editBtnClickHandle = () => {
    console.log('Edit Profile button clicked');
    setUserMenuOpen(true);
  };

  const logOutBtnClickHandle = () => {
    closeModal();
  };

  return (
    <>
      {!isUserMenuOpen && (
        <div style={style} className={css.container} ref={modalRef}>
          <button onClick={editBtnClickHandle} className={css.editBtn}>
            <span className={css.editSpan}>Edit profile</span>
            <EditPen className={css.editPen} />
          </button>

          <div onClick={logOutBtnClickHandle} className={css.btnWrp}>
            <button type="button" className={css.logoutBtn}>
              Log out
              <UserArrowSvg />
            </button>
          </div>
        </div>
      )}

      {isUserMenuOpen && (
        <UserMenuModalForm
          onClose={() => {
            setUserMenuOpen(false);
            closeModal();
          }}
        />
      )}
    </>
  );
};

export default EditUserForm;
