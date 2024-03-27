import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

import css from './SearchBox.module.css';

function SearchBox() {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </form>
  );
}
export default SearchBox;
