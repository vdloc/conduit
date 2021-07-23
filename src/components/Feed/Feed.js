import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { selectCurrentUser } from 'redux/slices/user/userSlice';
import FeedTabs from './FeedTabs';
import GlobalFeed from './GlobalFeed';
import TagFeed from './TagFeed';
import SubscribeFeed from './SubscribeFeed';

export default function Feed() {
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);
  const { state: navigationState } = useLocation();
  const {
    user: { offset: userFeedOffset = 0 } = {},
    global: { offset: globalFeedOffset = 0 } = {},
    tag: { tagName = '', offset: tagFeedOffset = 0 } = {},
    activeTab = currentUser ? 0 : 1,
  } = navigationState || {};

  function createPaginationHandler(feedType) {
    return function (pageId) {
      history.push({
        state: {
          ...navigationState,
          [feedType]: { offset: pageId - 1 },
        },
      });
    };
  }

  return (
    <>
      <FeedTabs />
      {activeTab === 2 ? (
        <TagFeed
          tag={tagName}
          offset={tagFeedOffset}
          onPageClick={createPaginationHandler('tag')}
        />
      ) : activeTab === 0 && currentUser ? (
        <SubscribeFeed
          offset={userFeedOffset}
          onPageClick={createPaginationHandler('user')}
        />
      ) : (
        <GlobalFeed
          offset={globalFeedOffset}
          onPageClick={createPaginationHandler('global')}
        />
      )}
    </>
  );
}
