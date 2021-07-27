import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useParams } from 'react-router-dom';
import { selectCurrentUser } from 'redux/slices/userSlice';

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
  const { slug } = useParams();

  return (
    <>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/editor' isActive={() => slug}>
          <i className='ion-compose'></i>
          &nbsp; New Post
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
        <Link className='navbar-brand' to='/'>
          conduit
        </Link>
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
