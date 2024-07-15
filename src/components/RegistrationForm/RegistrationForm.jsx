import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { register } from '../../redux/auth/operations';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

const validation = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(20, 'Too long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(4, 'Too short!').required('Required'),
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
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <p className={css.heading}>Register your account</p>
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </label>
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
