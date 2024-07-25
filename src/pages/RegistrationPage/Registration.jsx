import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Registration.module.css';

function Registration() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}

export default Registration;
