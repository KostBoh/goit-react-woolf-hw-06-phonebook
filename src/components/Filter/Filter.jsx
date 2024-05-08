import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/contactsSlice';

import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter || '');
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.filter}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        className={styles.input}
      />
    </div>
  );
};

export default Filter;
