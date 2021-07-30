import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';

import { errorToast } from 'libs/toast';
import { createSerializedErrorMessages } from 'utils/formats';
import { clearToken } from 'utils/storage';
import SettingSchema from './schema';
import ErrorMessages from 'components/Form/ErrorMessages';
import { useUpdateUserMutation } from 'services';
import { selectCurrentUser, signOut } from 'features/user/userSlice';

const initialValues = {
  email: '',
  password: '',
  username: '',
  image: '',
  bio: '',
};

export default function SettingForm() {
  const dispatch = useDispatch();
  const [asyncMessages, setAsyncMessages] = useState([]);
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser) || {};
  const [updateUser, { isError, error }] = useUpdateUserMutation();

  async function handleSubmit(values) {
    updateUser(values);
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

  function handleSignOut() {
    dispatch(signOut());
    history.push('/');
    clearToken();
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
        errorToast(`Cant' update user setting!`, { toastId: 'Setting' });
      }
    }
  }, [isError, error]);

  return (
    <Formik
      initialValues={{ ...initialValues, ...currentUser }}
      validationSchema={SettingSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, dirty, isValid, handleChange }) => {
        const isSubmitDisabled = isSubmitting || !dirty || !isValid;
        const customChangeHandler = createCustomChangeHandler(handleChange);

        return (
          <>
            <ErrorMessages
              order={['image', 'username', 'bio', 'email', 'password']}
              extraMessages={asyncMessages}
            />
            <Form>
              <fieldset>
                <fieldset className='form-group'>
                  <Field
                    className='form-control'
                    type='text'
                    placeholder='URL of profile picture'
                    name='image'
                    onChange={customChangeHandler}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Field
                    className='form-control form-control-lg'
                    type='text'
                    placeholder='Your Name'
                    name='username'
                    onChange={customChangeHandler}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Field
                    as='textarea'
                    className='form-control form-control-lg'
                    rows='8'
                    placeholder='Short bio about you'
                    name='bio'
                    onChange={customChangeHandler}
                  ></Field>
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
                  className={classNames(
                    'btn btn-lg btn-primary pull-xs-right',
                    {
                      disabled: isSubmitDisabled,
                    }
                  )}
                >
                  Update Settings
                </button>
              </fieldset>
            </Form>
            <hr />
            <button className='btn btn-outline-danger' onClick={handleSignOut}>
              Or click here to logout.
            </button>
          </>
        );
      }}
    </Formik>
  );
}
