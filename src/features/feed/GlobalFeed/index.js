import ErrorPlaceholder from 'components/ErrorPlaceholder';
import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectGlobalFeedOffset,
  setGlobalFeedOffset,
} from 'store/slices/settingSlice';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from 'components/ArticleList';
import Pagination from 'components/Pagination';

export default function GlobalFeed() {
  const dispatch = useDispatch();
  const globalFeedOffset = useSelector(selectGlobalFeedOffset);
  const { data, isError, isSuccess, isFetching, isLoading } =
    useGetGlobalFeedQuery({
      offset: globalFeedOffset,
    });

  function handlePageItemClick(pageId) {
    dispatch(setGlobalFeedOffset(pageId - 1));
  }

  useErrorNotification({
    message: `Can't get the global feed !`,
    toastId: 'GlobalFeed',
    isError,
  });
  useDisplayLoaderWhileFetch(isFetching, isLoading);

  return isSuccess && data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={globalFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : isError ? (
    <ErrorPlaceholder />
  ) : (
    'is Loading...'
  );
}
