import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { getContacts } from 'servise/contactsServise';
import { selectLoader, selectError } from '../redux/selectors';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoader);
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
      {loader ? <p>Loading...</p> : error ? <p>{error}</p> : <ContactList />}
    </div>
  );
};
