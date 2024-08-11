import React from 'react';
import styles from './FollowUs.module.css';
import { SocialLinks } from 'components/Footer/SocialLinks/SocialLinks';

const FollowUs = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.followUs}>
        <h3>Follow us</h3>
        <div className={styles.socialIcons}>
          <SocialLinks />
        </div>
      </div>
      <div className={styles.popularRecipes}>
        <h3>Popular recipes</h3>
        {/* Lista popularnych przepisów */}
      </div>
    </div>
  );
};

export default FollowUs;
