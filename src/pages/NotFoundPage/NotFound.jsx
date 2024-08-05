import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img
          className={css.imgMobile}
          srcSet="
                ../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png    259w,
                ../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile@x2.png 518w
              "
          sizes="(min-width: 320px) 320px"
          src="../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-mobile.png"
          alt="people connecting a plug"
          width="259"
          height="170"
        />
        <img
          className={css.imgTablet}
          srcSet="
                ../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-tablet.png    498w,
                ../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-tablet@x2.png 996w
              "
          sizes="(min-width: 768px) 768px"
          src="../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-tablet.png"
          alt="people connecting a plug"
          width="498"
          height="327"
        />
        <img
          className={css.imgDesktop}
          srcSet="
                ../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-desktop.png    1x,
                ../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-desktop@x2.png 2x
              "
          sizes="(min-width: 1200px) 1200px"
          src="../../assets/NotFoundPage/404-page-not-found-with-people-connecting-a-plug-desktop.png"
          alt="people connecting a plug"
          width="498"
          height="331"
        />
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
