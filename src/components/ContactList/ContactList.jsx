import { useSelector, useDispatch } from 'react-redux';
import { List, DeleteBtn } from './ContactList.styled';
import { getFilterContacts } from '../../redux/selectors.js';
import { deleteContact } from '../../servise/contactsServise';

const ContactList = () => {
  const filteredContacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();
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
