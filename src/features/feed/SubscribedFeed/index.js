import ErrorPlaceholder from 'components/ErrorPlaceholder';
import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSubscribedFeedOffset,
  setSubscribedFeedOffset,
} from 'store/slices/settingSlice';
import { useGetSubscribedFeedQuery } from 'services/api';
import ArticleList from 'components/ArticleList';
import Pagination from 'components/Pagination';

export default function SubscribedFeed() {
  const dispatch = useDispatch();
  const subscribedFeedOffset = useSelector(selectSubscribedFeedOffset);
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetSubscribedFeedQuery({
      offset: subscribedFeedOffset,
    });

  function handlePageItemClick(pageId) {
    dispatch(setSubscribedFeedOffset(pageId - 1));
  }

  useErrorNotification({
    message: `Can't get the subscribed feed !`,
    toastId: 'SubscribedFeed',
    isError,
  });
  useDisplayLoaderWhileFetch(isFetching, isLoading);

  return isSuccess && data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={subscribedFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : isError ? (
    <ErrorPlaceholder />
  ) : (
    'is loading...'
  );
}
