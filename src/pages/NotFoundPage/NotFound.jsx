import React from 'react';
import notFoundMobile from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png';
import notFoundTablet from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-tablet.png';
import notFoundDesktop from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-desktop.png';
import notFoundMobile2 from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile@x2.png';
import notFoundTablet2 from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-tablet@x2.png';
import notFoundDesktop2 from '../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-desktop@x2.png';
import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={`${notFoundMobile2} 2x, ${notFoundMobile} 1x`}
          />
          <img
            className={css.imgMobile}
            src={notFoundMobile}
            alt="People connecting a plug"
            width="259"
            height="170"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 768px) and (max-width: 1199px)"
            srcSet={`${notFoundTablet2} 2x, ${notFoundTablet} 1x`}
          />
          <img
            className={css.imgTablet}
            src={notFoundTablet}
            alt="People connecting a plug"
            width="498"
            height="327"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`${notFoundDesktop2} 2x, ${notFoundDesktop} 1x`}
          />
          <img
            className={css.imgDesktop}
            src={notFoundDesktop}
            alt="People connecting a plug"
            width="498"
            height="331"
          />
        </picture>
        <div className={css.text}>
          <h2 className={css.h2}>We are sorry,</h2>
          <p className={css.p}>
            but the page you were looking for can’t be found..
          </p>
        </div>
      </div>
    </div>
  );
};