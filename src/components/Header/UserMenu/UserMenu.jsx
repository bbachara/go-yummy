import { useRef, useState } from 'react';
import UserMenuModalForm from './UserMenuModalForm/UserMenuModalForm';
import EditUserForm from './EditUserForm/EditUserForm';
import UserAvatar from './UserAvatar/UserAvatar';
import css from './UserMenu.module.css';
import UserName from './UserName/UserName';

const UserMenu = () => {
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [largeModalOpen, setLargeModalOpen] = useState(false);

  const userMenuContainerRef = useRef();

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

  return (
    <div className={css.wrapper}>
      <div
        ref={userMenuContainerRef}
        className={css.container}
        onClick={openSmallModal}
      >
        <UserAvatar />
        <UserName />
      </div>
      {smallModalOpen && (
        <EditUserForm
          closeModal={closeSmallModal}
          openEdit={openLargeModal}
          container={userMenuContainerRef.current}
        />
      )}
      {largeModalOpen && <UserMenuModalForm onClose={closeLargeModal} />}
    </div>
  );
};

export default UserMenu;
