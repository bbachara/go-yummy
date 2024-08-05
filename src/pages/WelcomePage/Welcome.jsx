import { ReactComponent as Logo } from '../../assets/SVG/Logo/logo.svg';
import { Link } from 'react-router-dom';
import styles from "./Welcome.module.css";

export const WelcomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.svgWrapper}>
        <Logo />
      </div>
      <h1 className={styles.title}>Welcome to the app!</h1>
      <p className={styles.subtitle}>
        This app offers more than just a collection of recipes - it is
        designed to be your very own digital cookbook. You can easily
        save and retrieve your own recipes at any time.
      </p>
      <div className={styles.buttonsWrapper}>
        <Link to="/register" className={styles.roundedDark}>
          Registration
        </Link>
        <Link to="/signin" className={styles.rounded}>
          Sign In
        </Link>
      </div>
    </div>
  );
};
