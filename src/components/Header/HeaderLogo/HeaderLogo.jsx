import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ReactComponent as SvgLogo } from '../../../assets/SVG/Logo/logo.svg';
import { ReactComponent as SvgLogoInv } from '../../../assets/SVG/Logo/logoInv.svg';
import css from './HeaderLogo.module.css';

const HeaderLogo = ({ inv }) => {
  console.log('Rendering HeaderLogo');

  const location = useLocation();
  const path = location.pathname;

  console.log('path:', path);

  const isInv = path === '/main';

  return (
    <Link to="/homepage" className={css.logoLink}>
      {isInv ? (
        <SvgLogoInv className={`${css.logo} ${css.logoInv}`} />
      ) : (
        <SvgLogo className={css.logo} />
      )}
    </Link>
  );
};

export default HeaderLogo;
