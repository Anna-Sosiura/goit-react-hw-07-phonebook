import { useEffect, useState } from 'react';
import { Form, AddBtn, Label, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { setContact } from '../../redux/contactSlice';
import { Notify } from 'notiflix';

const getContacts = state => state.contacts.contacts;

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const resetForm = () => {
      setName('');
      setNumber('');
    };
    const isContact = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isContact) {
      Notify.info(`Such contact already exists`);
      return;
    }
    dispatch(setContact({ id: nanoid(), name: name, number: number }));

    resetForm();
  };
  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const hendleChange = e => {
    const { value, name } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);

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
          value={number}
          onChange={hendleChange}
        />
      </Label>
      <AddBtn type="submit">Add contact</AddBtn>
    </Form>
  );
};

export default ContactForm;
