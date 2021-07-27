import React from 'react';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from 'components/ArticleList';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteFeedOffset,
  setFavoriteFeedOffset,
} from 'redux/slices/settingSlice';
import useErrorNotification from 'hooks/useErrorNotification';
import ErrorPlaceholder from 'components/ErrorPlaceholder';
import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';

export default function FavoriteFeed({ username }) {
  const dispatch = useDispatch();
  const favoriteFeedOffset = useSelector(selectFavoriteFeedOffset);
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetGlobalFeedQuery({
      favorited: username,
      offset: favoriteFeedOffset,
    });

  function handlePageItemClick(pageId) {
    dispatch(setFavoriteFeedOffset(pageId - 1));
  }

  useErrorNotification({
    message: `Can't get the favorite feed!`,
    toastId: 'FavoriteFeed',
    isError,
  });
  useDisplayLoaderWhileFetch(isFetching, isLoading);

  return isSuccess && data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={favoriteFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : isError ? (
    <ErrorPlaceholder />
  ) : (
    'is loading...'
  );
}
