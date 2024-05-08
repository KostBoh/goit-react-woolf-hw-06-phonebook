import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.data);
  const filter = useSelector(state => state.filter || '');
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.item}>
          {contact.name}: {contact.number}
          <button
            className={styles.buttonDelete}
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
