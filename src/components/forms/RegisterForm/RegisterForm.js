import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserInfo } from 'redux/slices/user/userSlice';
import { useRegisterMutation } from 'services/api';
import { getSerializedErrorMessages } from 'utils/utils';
import ErrorMessages from '../ErrorMessages';

export default function RegisterForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const [register, { isLoading }] = useRegisterMutation();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { user } = await register(formState).unwrap();
      dispatch(setUserInfo(user));
      history.push({ pathname: '/', state: { activeTab: 0 } });
    } catch (err) {
      const { status, data } = err;
      if (status === 422) {
        const serializedErrorMessages = getSerializedErrorMessages(data.errors);

        setErrorMessages(serializedErrorMessages);
      }
    }
  }

  return (
    <>
      <ErrorMessages messages={errorMessages} />
      <form onSubmit={handleSubmit}>
        <fieldset className='form-group'>
          <input
            className='form-control form-control-lg'
            type='text'
            placeholder='Username'
            name='username'
            onChange={handleChange}
          />
        </fieldset>
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
          Sign up
        </button>
      </form>
    </>
  );
}
