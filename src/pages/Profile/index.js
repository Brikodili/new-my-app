import React, { useContext } from 'react';
import Layout from 'components/Layout';
import {ErrorMessage, Field, Form, Formik} from "formik";
import { CurrentUserContext } from 'components/App';
import loginValidationSchema from 'pages/Login/validation-schema';

import { api } from 'api';

export default function() {
  const { dispatch } = useContext(CurrentUserContext);

  function handleSubmit(values, actions) {
    api.post('/edit-user', values).then((resp) => {
      console.log(resp);
      if(resp.data.status) {
        dispatch({type: 'SET_CURRENT_USER', payload: resp.data.user });
      } else {
        actions.setErrors( resp.data.message );
      }
    }).catch((error) => {
      actions.setErrors( error.data.message );
      // Api server doesn`t send error status
    })
  }

  const initialFormValues = {
    name: '',
    surname: '',
    name_customer: '',
    role: '',
  };

  return (
    <Layout>
      <h1>Profile</h1>
      <Formik
        // validationSchema={loginValidationSchema}
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
      >
        {({ errors }) => {
          return (
            <Form className="form">
              {errors.general}
              <div className="field">
                <label className="label">Name</label>
                <Field className="input" name="name" placeholder="name"/>
                <span>
                  <ErrorMessage name="name" />
                </span>
              </div>
              <div className="field">
                <label className="label">Surname</label>
                <Field className="input" name="surname" placeholder="surname"/>
                <span>
                  <ErrorMessage name="surname" />
                </span>
              </div>
              <div className="field">
                <label className="label">Name Customer</label>
                <Field className="input" name="name_customer" placeholder="name_customer"/>
                <span>
                  <ErrorMessage name="name_customer"/>
                </span>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <Field className="input" name="role" placeholder="role"/>
                <span>
                  <ErrorMessage name="role"/>
                </span>
              </div>
              <button type="submit" className="button">Submit</button>
            </Form>
          )
        }}
      </Formik>
    </Layout>
  )
};
