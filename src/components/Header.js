import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectCurrentUser } from 'redux/slices/user/userSlice';

function PublicLinks() {
  return (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/login'>
          Sign in
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/register'>
          Sign up
        </NavLink>
      </li>
    </>
  );
}

function PrivateLinks({ username }) {
  return (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/editor'>
          <i className='ion-compose'></i>
          &nbsp;New Post
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/setting'>
          <i className='ion-gear-a'></i>
          &nbsp;Settings
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to={`/@${username}`}>
          {username}
        </NavLink>
      </li>
    </>
  );
}

export default function Header() {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <nav className='navbar navbar-light'>
      <div className='container'>
        <a className='navbar-brand' href='index.html'>
          conduit
        </a>
        <ul className='nav navbar-nav pull-xs-right'>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/' exact>
              Home
            </NavLink>
          </li>
          {currentUser ? (
            <PrivateLinks username={currentUser.username} />
          ) : (
            <PublicLinks />
          )}
        </ul>
      </div>
    </nav>
  );
}
