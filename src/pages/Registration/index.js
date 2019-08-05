import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Layout from 'components/Layout';
import signUpValidationSchema from 'pages/Registration/validation-schema';
import { api } from 'api';

export default function ({ history }) {
  function handleSubmit(values, actions) {
    api.post('/register', values).then((resp) => {
      if (resp.status === 201) {
        history.push('/')
      } else {
        actions.setErrors(resp.data.message)
      }
    })
  }

  const initialFormValues = {
    name: '',
    surname: '',
    name_customer: '',
    email: '',
    phone: '',
    role: '',
    password: '',
    password_confirmation: '',
  }

  return (
    <Layout>
      <h1>Signup</h1>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}>
          {() => {
            return (
              <Form>
                <Field name="name" placeholder="name"/>
                <span>
                  <ErrorMessage name="name" />
                </span>
                <Field name="surname" placeholder="surname"/>
                <ErrorMessage name="surname" />
                <Field name="name_customer" placeholder="name_customer"/>
                <ErrorMessage name="name_customer" />
                <Field name="email" placeholder="email"/>
                <ErrorMessage name="email" />
                <Field name="phone" placeholder="phone"/>
                <ErrorMessage name="phone" />
                <Field name="role" placeholder="role"/>
                <ErrorMessage name="role" />
                <Field name="password" placeholder="password"/>
                <ErrorMessage name="password" />
                <Field name="password_confirmation" placeholder="password_confirmation"/>
                <ErrorMessage name="password_confirmation" />
                <button type="submit">Submit</button>
              </Form>
            )
          }}
      </Formik>
    </Layout>
  )
};
