import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TagsList from 'components/TagLinks';
import FeedTabs from 'features/feed/FeedTabs';
import TagFeed from 'features/feed/TagFeed';
import SubscribedFeed from 'features/feed/SubscribedFeed';
import GlobalFeed from 'features/feed/GlobalFeed';

import { selectCurrentUser } from 'store/slices/userSlice';
import {
  selectHomePageActiveTabId,
  setHomePageActiveTabId,
  setTagName,
} from 'store/slices/settingSlice';

export default function Home() {
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
    <div className='home-page'>
      <div className='banner'>
        <div className='container'>
          <h1 className='logo-font'>conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className='container page'>
        <div className='row'>
          <div className='col-md-9'>
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
          </div>

          <div className='col-md-3'>
            <div className='sidebar'>
              <p>Popular Tags</p>
              <TagsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
