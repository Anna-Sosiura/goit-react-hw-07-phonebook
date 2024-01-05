import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { getContacts } from 'servise/contactsServise';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

export const App = () => {
  const dispatch = useDispatch();
  const selectLoader = state => state.contacts.isLoading;
  const selectError = state => state.contacts.error;
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        marginLeft: 50,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        Notify.warning(error)
      ) : (
        <ContactList />
      )}
    </div>
  );
};
