import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/slices/userSlice';
import FeedTabs from './FeedTabs';
import GlobalFeed from './GlobalFeed';
import TagFeed from './TagFeed';
import SubscribedFeed from './SubscribedFeed';
import {
  selectHomePageActiveTabId,
  setHomePageActiveTabId,
  setTagName,
} from 'redux/slices/settingSlice';

export default function Feed() {
  const currentUser = useSelector(selectCurrentUser);
  const activeTabId = useSelector(selectHomePageActiveTabId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && activeTabId !== 0) {
      dispatch(setHomePageActiveTabId(0));
    }

    dispatch(setTagName(''));
  }, []);

  return (
    <>
      <FeedTabs />
      {activeTabId === 2 ? (
        <TagFeed />
      ) : currentUser && activeTabId === 0 ? (
        <SubscribedFeed />
      ) : (
        <GlobalFeed />
      )}
    </>
  );
}
