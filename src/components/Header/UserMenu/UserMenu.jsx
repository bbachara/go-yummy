import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserMenuModalForm from './UserMenuModalForm/UserMenuModalForm';
import EditUserForm from './EditUserForm/EditUserForm';
import UserAvatar from './UserAvatar/UserAvatar';
import css from './UserMenu.module.css';
import UserName from './UserName/UserName';
import ConfirmModal from './ConfirmModal/ConfirmModal';

const UserMenu = () => {
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [userName, setUserName] = useState('');

  const userMenuContainerRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const openSmallModal = () => {
    setSmallModalOpen(true);
  };

  const closeSmallModal = () => {
    setSmallModalOpen(false);
  };

  const openLargeModal = () => {
    setLargeModalOpen(true);
    closeSmallModal();
  };

  const closeLargeModal = () => {
    setLargeModalOpen(false);
  };

  const openConfirmModal = () => {
    setConfirmModalOpen(true);
    closeSmallModal();
  };

  const closeConfirmModal = () => {
    setConfirmModalOpen(false);
  };

  const handleLogoutConfirm = () => {
    console.log('User logged out');
    localStorage.removeItem('userName');
    navigate('/');
  };

  const handleUserNameUpdate = (name) => {
    setUserName(name);
    localStorage.setItem('userName', name); // Zaktualizuj nazwę użytkownika w localStorage
  };

  return (
    <div className={css.wrapper}>
      <div
        ref={userMenuContainerRef}
        className={css.container}
        onClick={openSmallModal}
      >
        <UserAvatar />
        <UserName name={userName} />
      </div>
      {smallModalOpen && (
        <EditUserForm
          closeModal={closeSmallModal}
          openEdit={openLargeModal}
          openConfirm={openConfirmModal}
          container={userMenuContainerRef.current}
        />
      )}
      {largeModalOpen && (
        <UserMenuModalForm 
          onClose={closeLargeModal} 
          onUserNameUpdate={handleUserNameUpdate}
        />
      )}
      {confirmModalOpen && (
        <ConfirmModal
          onClose={closeConfirmModal}
          onConfirm={handleLogoutConfirm}
        />
      )}
    </div>
  );
};

export default UserMenu;