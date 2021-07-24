import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserInfo } from 'redux/slices/userSlice';
import { useLoginMutation } from 'services/api';
import { getSerializedErrorMessages } from 'utils/utils';
import { push } from 'connected-react-router';
import ErrorMessages from '../ErrorMessages';

export default function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [errorMessages, setErrorMessages] = useState([]);
  const [login, { isLoading }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await login(formState).unwrap();

      dispatch(setUserInfo(user));
      dispatch(push({ pathname: '/', state: { activeTab: 0 } }));
    } catch (err) {
      const { status, data } = err;

      if (status === 422) {
        const serializedErrorMessages = getSerializedErrorMessages(data.errors);

        setErrorMessages(serializedErrorMessages);
      }
    }
  };

  return (
    <>
      <ErrorMessages messages={errorMessages} />
      <form onSubmit={handleSubmit}>
        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
        </fieldset>
        <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>
          Sign in
        </button>
      </form>
    </>
  );
}
