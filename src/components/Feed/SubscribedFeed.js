import ErrorPlaceholder from 'components/ErrorPlaceholder';
import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';
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
