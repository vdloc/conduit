import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';

import LoginSchema from './schema';
import ErrorMessages from 'components/Form/ErrorMessages';
import { useLoginMutation } from 'services';
import { createSerializedErrorMessages } from 'utils/formats';
import { errorToast } from 'libs/toast';

export default function LoginForm() {
  const [login, { isError, error }] = useLoginMutation();
  const [asyncMessages, setAsyncMessages] = useState([]);

  async function handleSubmit(values) {
    await login(values);
  }

  function createCustomChangeHandler(handleChange) {
    return function (e) {
      handleChange(e);

      // Clean the async error messages when user is updating the form again.
      if (asyncMessages.length) {
        setAsyncMessages([]);
      }
    };
  }

  useEffect(() => {
    if (isError && error) {
      const { status, data } = error || {};

      if (status === 422) {
        const serializedErrorMessages = createSerializedErrorMessages(
          data.errors
        );

        setAsyncMessages(serializedErrorMessages);
      } else {
        errorToast(`Cant' perform login action!`, { toastId: 'Login' });
      }
    }
  }, [isError, error]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty, isValid, handleChange }) => {
        const isSubmitDisabled = isSubmitting || !dirty || !isValid;
        const customChangeHandler = createCustomChangeHandler(handleChange);

        return (
          <>
            <ErrorMessages extraMessages={asyncMessages} />
            <Form>
              <fieldset className='form-group'>
                <Field
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Email'
                  name='email'
                  onChange={customChangeHandler}
                />
              </fieldset>
              <fieldset className='form-group'>
                <Field
                  className='form-control form-control-lg'
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={customChangeHandler}
                />
              </fieldset>
              <button
                className={classNames('btn btn-lg btn-primary pull-xs-right', {
                  disabled: isSubmitDisabled,
                })}
                type='submit'
              >
                Sign in
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
