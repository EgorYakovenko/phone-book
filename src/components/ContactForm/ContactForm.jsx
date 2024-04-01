import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';

import toast, { Toaster } from 'react-hot-toast';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'To short')
    .max(50, 'To long')
    .required('This is required!'),
  number: Yup.string()
    .matches(/^\d+$/, 'Value must be a number')
    .min(3, 'To short')
    .max(50, 'To long')
    .required('This is required!'),
});

function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
        id: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.container}>
        <label className={css.label} htmlFor={nameId}>
          Name
        </label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameId}
        ></Field>
        <ErrorMessage name="name" />

        <label className={css.label} htmlFor={numberId}>
          Number
        </label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={numberId}
        ></Field>
        <ErrorMessage name="number" />

        <button className={css.button} type="submit">
          Add contacts
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
