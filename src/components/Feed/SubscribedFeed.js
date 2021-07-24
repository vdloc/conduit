import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSubscribedFeedOffset,
  setSubscribedFeedOffset,
} from 'redux/slices/settingSlice';
import { useGetSubscribedFeedQuery } from 'services/api';
import ArticleList from '../ArticleList';
import Pagination from '../Pagination/Pagination';

export default function SubscribedFeed() {
  const dispatch = useDispatch();
  const subscribedFeedOffset = useSelector(selectSubscribedFeedOffset);
  const { data } = useGetSubscribedFeedQuery({ offset: subscribedFeedOffset });

  function handlePageItemClick(pageId) {
    dispatch(setSubscribedFeedOffset(pageId - 1));
  }

  return data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={subscribedFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : null;
}
