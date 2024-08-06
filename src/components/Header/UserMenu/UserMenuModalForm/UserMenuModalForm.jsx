import React, { useState, useRef, useEffect } from 'react';
import css from './UserMenuModalForm.module.css';
import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';

const UserMenuModalForm = ({ onClose }) => {
  const userMenuInput = useRef(null);
  const [image, setImage] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    console.log('UserMenuModalForm mounted');
    return () => console.log('UserMenuModalForm unmounted');
  }, []);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
    } else {
      setImage(null);
    }
  };

  const onClearImgClick = () => {
    setImage(null);
  };

  const handleUserNameChange = e => {
    setUserName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User name:', userName, 'Selected image:', image);
    onClose();
  };

  const userAvatarURL = '';

  return (
    <>
      <div className={css.overlay}></div> {}
      <div className={css.userModal}>
        <div className={css.cont}>
          <form onSubmit={handleSubmit}>
            <div className={css.avatarChanger}>
              <label htmlFor="newAvatartURL" className={css.avatarChangerLabel}>
                <div
                  style={{
                    backgroundImage: image ? 'none' : `url(${userAvatarURL})`,
                  }}
                  className={css.avatarPreview}
                >
                  <input
                    type="file"
                    name="newAvatartURL"
                    onChange={handleImageChange}
                    className={css.inputTypeFile}
                    id="newAvatartURL"
                    accept="image/*"
                  />
                  {!image && <span className={css.plusIcon}>+</span>}
                  {image && (
                    <div className={css.userAvatar}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="selected"
                        className={css.defaultImg}
                      />
                    </div>
                  )}
                </div>
              </label>
              {image && (
                <button
                  type="button"
                  onClick={onClearImgClick}
                  className={css.clearButton}
                >
                  ✖
                </button>
              )}
            </div>
            <div className={css.formFormat}>
              <div className={css.formInputFormat}>
                <input
                  autoComplete="off"
                  placeholder="Enter your name"
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={handleUserNameChange}
                  className={css.formInputUserMenu}
                  ref={userMenuInput}
                />
              </div>
              <div className={css.divButtonClass}>
                <button type="submit" className={css.submitButton}>
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
        <MobMenuCloseBtn closeMenu={onClose} />
      </div>
    </>
  );
};

export default UserMenuModalForm;
