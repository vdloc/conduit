import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGlobalFeedOffset,
  setGlobalFeedOffset,
} from 'redux/slices/settingSlice';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList';
import Pagination from '../Pagination/Pagination';

export default function GlobalFeed() {
  const dispatch = useDispatch();
  const globalFeedOffset = useSelector(selectGlobalFeedOffset);
  const { data } = useGetGlobalFeedQuery({ offset: globalFeedOffset });

  function handlePageItemClick(pageId) {
    dispatch(setGlobalFeedOffset(pageId - 1));
  }

  return data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={globalFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : null;
}
