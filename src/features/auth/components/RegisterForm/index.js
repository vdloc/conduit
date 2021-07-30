import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import classNames from 'classnames';
import ErrorMessages from 'components/Form/ErrorMessages';
import RegisterSchema from './schema';
import { useRegisterMutation } from 'services';
import { errorToast } from 'libs/toast';
import { createSerializedErrorMessages } from 'utils/formats';

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const [register, { isError, error }] = useRegisterMutation();
  const [asyncMessages, setAsyncMessages] = useState([]);

  async function handleSubmit(values) {
    await register(values);
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
        errorToast(`Cant' perform register action!`, { toastId: 'Register' });
      }
    }
  }, [isError, error]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty, isValid, handleChange }) => {
        const isSubmitDisabled = isSubmitting || !dirty || !isValid;
        const customChangeHandler = createCustomChangeHandler(handleChange);

        return (
          <>
            <ErrorMessages
              order={['username', 'email', 'password']}
              extraMessages={asyncMessages}
            />
            <Form>
              <fieldset className='form-group'>
                <Field
                  className='form-control form-control-lg'
                  type='text'
                  placeholder='Username'
                  name='username'
                  onChange={customChangeHandler}
                />
              </fieldset>
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
                Sign up
              </button>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
