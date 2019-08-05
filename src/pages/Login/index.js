import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CurrentUserContext } from 'components/App';
import loginValidationSchema from 'pages/Login/validation-schema';
import Layout from 'components/Layout';
import Cookie from 'js-cookie';
import { api } from 'api';

export default function(props) {
  const { dispatch } = useContext(CurrentUserContext);

  function handleSubmit(values, actions) {
    api.post('/login', values).then((resp) => {
      dispatch({type: 'SET_CURRENT_USER', payload: resp.data.user });
      Cookie.set('token', resp.data.token.split(' ')[1]);
    }).catch((error) => {
      actions.setErrors({ general: 'Unauthorized' })
    })
  }

  const initialFormValues = {
    email: '',
    password: '',
  }

  return (
    <Layout>
      <h1>Signin</h1>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      >
        {({ errors }) => {
          return (
            <Form>
              {errors.general}
              <Field name="email" placeholder="email"/>
              <ErrorMessage name="email" />
              <Field name="password" placeholder="password"/>
              <ErrorMessage name="password" />

              <button type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </Layout>
  )
};
