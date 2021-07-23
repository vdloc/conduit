import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  selectCurrentUser,
  updateUserInfo,
  setUserInfo,
} from 'redux/slices/userSlice';
import { useUpdateUserMutation } from 'services/api';

export default function SettingForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);
  const [formState, setFormState] = useState({ password: '', ...currentUser });
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { user } = await updateUser(formState).unwrap();

      dispatch(updateUserInfo(user));
    } catch (e) {}
  }

  function handleSignOut() {
    dispatch(setUserInfo(null));
    history.push('/');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <fieldset className='form-group'>
            <input
              className='form-control'
              type='text'
              placeholder='URL of profile picture'
              name='image'
              value={formState.image}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='form-group'>
            <input
              className='form-control form-control-lg'
              type='text'
              placeholder='Your Name'
              name='username'
              value={formState.username}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='form-group'>
            <textarea
              className='form-control form-control-lg'
              rows='8'
              placeholder='Short bio about you'
              name='bio'
              value={formState.bio}
              onChange={handleChange}
            ></textarea>
          </fieldset>
          <fieldset className='form-group'>
            <input
              className='form-control form-control-lg'
              type='text'
              placeholder='Email'
              name='email'
              value={formState.email}
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className='form-group'>
            <input
              className='form-control form-control-lg'
              type='password'
              placeholder='Password'
              name='password'
              value={formState.password}
              onChange={handleChange}
            />
          </fieldset>
          <button className='btn btn-lg btn-primary pull-xs-right'>
            Update Settings
          </button>
        </fieldset>
      </form>
      <hr />
      <button class='btn btn-outline-danger' onClick={handleSignOut}>
        Or click here to logout.
      </button>
    </>
  );
}
