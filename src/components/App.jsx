import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './FilterContact/FilterContact';
import css from './App.module.css';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts.thunk';
// import { useDispatch } from 'react-redux';

export const App = () => {
  return (
    <div className={css.contacts}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
