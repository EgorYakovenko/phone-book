import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(7, 'Too short!').required('Required'),
});

function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <p className={css.title}>Registration</p>
        <label className={css.label}>
          Username
          <Field className={css.allInput} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.allInput} type="email" name="email" />
          <ErrorMessage className={css.error} name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.allInput} type="password" name="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
