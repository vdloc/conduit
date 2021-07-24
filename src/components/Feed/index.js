import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/slices/userSlice';
import FeedTabs from './FeedTabs';
import GlobalFeed from './GlobalFeed';
import TagFeed from './TagFeed';
import SubscribedFeed from './SubscribedFeed';
import { selectHomePageActiveTabId } from 'redux/slices/settingSlice';

export default function Feed() {
  const currentUser = useSelector(selectCurrentUser);
  const activeTabId = useSelector(selectHomePageActiveTabId);

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
