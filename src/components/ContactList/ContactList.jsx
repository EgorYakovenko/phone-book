import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/slice';

function ContactList() {
  const contact = useSelector(selectFilteredContacts);

  return (
    <ul className={css.container}>
      {contact.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
