import css from './ContactsList.module.css';
import { DeleteBtn } from 'components/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts.thunk';
import { useEffect } from 'react';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <p className={css.contactInfoWrapper}>
            <span className={css.contactName}>{contact.name}:</span>&nbsp;
            <span className={css.contactNumber}>{contact.number}</span>
          </p>

          <DeleteBtn
            type="button"
            onDeleteContact={() => handleDeleteContact(contact.id)}
            id={contact.id}
            actionText=" Delete"
          ></DeleteBtn>
        </li>
      ))}
    </ul>
  );
};
