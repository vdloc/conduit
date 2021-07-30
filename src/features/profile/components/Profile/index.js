/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { FavoriteFeed, UserOwnedFeed } from 'features/feed';
import {
  selectProfilePageActiveTabId,
  setProfilePageActiveTabId,
} from 'features/feed/feedSlice';
import ProfileBanner from '../ProfileBanner';

export default function Profile({ username }) {
  const dispatch = useDispatch();
  const activeTabId = useSelector(selectProfilePageActiveTabId);

  function handleTabClick(tabId) {
    return function (e) {
      e.preventDefault();
      dispatch(setProfilePageActiveTabId(tabId));
    };
  }

  useEffect(() => {
    dispatch(setProfilePageActiveTabId(0));
  }, [dispatch]);

  return (
    <div className='profile-page'>
      <ProfileBanner username={username} />
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 offset-md-1'>
            <div className='articles-toggle'>
              <ul className='nav nav-pills outline-active'>
                <li className='nav-item'>
                  <a
                    href=''
                    className={classNames('nav-link', {
                      active: activeTabId === 0,
                    })}
                    onClick={handleTabClick(0)}
                  >
                    My Articles
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    href=''
                    className={classNames('nav-link', {
                      active: activeTabId === 1,
                    })}
                    onClick={handleTabClick(1)}
                  >
                    Favorited Articles
                  </a>
                </li>
              </ul>
              {activeTabId === 1 ? (
                <FavoriteFeed username={username} />
              ) : (
                <UserOwnedFeed username={username} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
