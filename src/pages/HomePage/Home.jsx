import { PreviewCategory } from '../../components/PreviewCategory/PreviewCategory';
import { Hero } from 'components/Hero/Hero';
import css from './Home.module.css';
import { Background } from '../../components/Background/Background';

export const HomePage = () => {
  return (
    <div className={css.homeDiv}>
      <div>
        <Hero />
        <PreviewCategory />
      </div>
      <Background />
    </div>
  );
};
