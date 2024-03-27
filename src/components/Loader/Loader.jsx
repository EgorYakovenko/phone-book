import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.container}>
      <ProgressBar
        visible={true}
        height="60"
        width="90"
        color="#4fa94d"
        barColor="#5ffa4b"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
