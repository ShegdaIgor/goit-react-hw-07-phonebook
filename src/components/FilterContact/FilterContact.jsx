import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import css from './FilterContact.module.css';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterContact = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={css.inputWrapper}>
      <label className={css.formLabel}>Find contacts by Name</label>
      <input
        type="text"
        name="filter"
        onChange={handleFilterContact}
        value={filter}
      />
    </div>
  );
};
