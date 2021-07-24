import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectOwnFeedOffset,
  setOwnFeedOffset,
} from 'redux/slices/settingSlice';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList';
import Pagination from '../Pagination/Pagination';

export default function UserOwnedFeed({ username }) {
  const dispatch = useDispatch();
  const ownFeedOffset = useSelector(selectOwnFeedOffset);
  const { data } = useGetGlobalFeedQuery({
    offset: ownFeedOffset,
    author: username,
  });

  function handlePageItemClick(pageId) {
    dispatch(setOwnFeedOffset(pageId - 1));
  }

  return data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={ownFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : null;
}
