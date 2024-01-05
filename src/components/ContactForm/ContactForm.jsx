import { useState } from 'react';
import { Form, AddBtn, Label, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../servise/contactsServise';
import { Notify } from 'notiflix';

const getContacts = state => state.contacts.contactItems;

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const resetForm = () => {
      setName('');
      setPhone('');
    };
    const isContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      Notify.info(`Such contact already exists`);
      resetForm();
      return;
    }
    dispatch(addContact({ name, phone }));

    resetForm();
  };

  const hendleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setPhone(value);

        break;
      default:
        break;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          required
          value={name}
          onChange={hendleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          required
          value={phone}
          onChange={hendleChange}
        />
      </Label>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};

export default ContactForm;
