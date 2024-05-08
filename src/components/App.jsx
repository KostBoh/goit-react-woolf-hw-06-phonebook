import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../store/contactsSlice';
import CreatePhonebookForm from './CreatePhonebookForm/CreatePhonebookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.data);
  const filter = useSelector(state => state.filter || '');
  const dispatch = useDispatch();

  const createNewContact = (name, number) => {
    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Phonebook</h1>
      <CreatePhonebookForm submit={createNewContact} />
      <h2 className={styles.subheading}>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
