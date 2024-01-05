import { useSelector, useDispatch } from 'react-redux';
import { List, DeleteBtn } from './ContactList.styled';
import { getFilterContacts } from '../../redux/selectors.js';
import { deleteContact } from '../../servise/contactsServise';
// const getContacts = state => state.contacts.contacts;

const ContactList = () => {
  const filteredContacts = useSelector(getFilterContacts);
  console.log(filteredContacts);
  // const filter = useSelector(state => state.filter.filter) || '';
  const dispatch = useDispatch();
  console.log(dispatch);
  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };
  return (
    <List>
      {filteredContacts.map(contact => (
        <li
          key={contact.id}
          style={{
            fontSize: 30,
          }}
        >
          {contact.name}: {contact.phone}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </li>
      ))}
    </List>
  );
};
export default ContactList;
