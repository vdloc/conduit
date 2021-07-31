/* eslint-disable jsx-a11y/anchor-is-valid */

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectHomePageActiveTabId,
  selectTagName,
  setHomePageActiveTabId,
} from 'features/feed/feedSlice';
import { selectCurrentUser } from 'features/user/userSlice';

export default function FeedTabs() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const activeTabId = useSelector(selectHomePageActiveTabId);
  const tagName = useSelector(selectTagName);

  function handleTabClick(tabId) {
    return (e) => {
      e.preventDefault();
      dispatch(setHomePageActiveTabId(tabId));
    };
  }

  return (
    <div className='feed-toggle'>
      <ul className='nav nav-pills outline-active'>
        {currentUser ? (
          <li className='nav-item'>
            <a
              href=''
              className={classNames('nav-link', { active: activeTabId === 0 })}
              onClick={handleTabClick(0)}
            >
              Your Feed
            </a>
          </li>
        ) : null}
        <li className='nav-item'>
          <a
            href=''
            className={classNames('nav-link', { active: activeTabId === 1 })}
            onClick={handleTabClick(1)}
          >
            Global Feed
          </a>
        </li>
        {tagName ? (
          <li className='nav-item'>
            <a
              href=''
              className={classNames('nav-link', { active: activeTabId === 2 })}
              onClick={handleTabClick(2)}
            >
              #{tagName}
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
