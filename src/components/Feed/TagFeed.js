import ErrorPlaceholder from 'components/ErrorPlaceholder';
import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';
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
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetGlobalFeedQuery({
      tag: tagName,
      offset: tagFeedOffset,
    });

  function handlePageItemClick(pageId) {
    dispatch(setTagFeedOffset(pageId - 1));
  }

  useErrorNotification({
    message: `Can't get the feed for #${tagName} tag !`,
    toastId: `${tagName}_TagFeed`,
    isError,
  });
  useDisplayLoaderWhileFetch(isFetching, isLoading);

  return isSuccess && data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={tagFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : isError ? (
    <ErrorPlaceholder />
  ) : (
    'is loading...'
  );
}
