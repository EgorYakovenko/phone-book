import css from './Contact.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.cardContainer}>
        <p className={css.name}>
          <BsFillPersonFill className={css.icon} />
          {name}
        </p>
        <p className={css.number}>
          <BsFillTelephoneFill className={css.icon} /> {number}
        </p>
      </div>

      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
