import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="rgb(139, 170, 54)"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
