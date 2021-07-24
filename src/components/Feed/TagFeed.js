import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTagFeedOffset,
  selectTagName,
  setTagFeedOffset,
} from 'redux/slices/settingSlice';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList';
import Pagination from '../Pagination/Pagination';

export default function TagFeed() {
  const dispatch = useDispatch();
  const tagName = useSelector(selectTagName);
  const tagFeedOffset = useSelector(selectTagFeedOffset);
  const { data } = useGetGlobalFeedQuery({
    tag: tagName,
    offset: tagFeedOffset,
  });

  function handlePageItemClick(pageId) {
    dispatch(setTagFeedOffset(pageId - 1));
  }

  return data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={tagFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : null;
}
