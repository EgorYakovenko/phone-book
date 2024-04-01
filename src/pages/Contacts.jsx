import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';

function Contacts() {
  return (
    <>
      <p>Your contacts</p>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default Contacts;
