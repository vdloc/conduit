import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/slices/userSlice';
import { Link, useLocation } from 'react-router-dom';

export default function FeedTabs() {
  const { state: navigationState = {} } = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const { tag: { tagName = '' } = {}, activeTab = currentUser ? 0 : 1 } =
    navigationState || {};

  return (
    <div className='feed-toggle'>
      <ul className='nav nav-pills outline-active'>
        {currentUser ? (
          <li className='nav-item'>
            <Link
              className={classNames('nav-link', { active: activeTab === 0 })}
              to={{
                pathname: '/',
                state: { ...navigationState, activeTab: 0 },
              }}
            >
              Your Feed
            </Link>
          </li>
        ) : null}
        <li className='nav-item'>
          <Link
            className={classNames('nav-link', { active: activeTab === 1 })}
            to={{
              pathname: '/',
              state: { ...navigationState, activeTab: 1 },
            }}
          >
            Global Feed
          </Link>
        </li>
        {tagName ? (
          <li className='nav-item'>
            <Link
              className={classNames('nav-link', { active: activeTab === 2 })}
              to={{
                pathname: '/',
                state: { ...navigationState, activeTab: 2 },
              }}
            >
              #{tagName}
            </Link>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
