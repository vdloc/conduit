import { useDispatch, useSelector } from 'react-redux';

import {
  selectFavoriteFeedOffset,
  setFavoriteFeedOffset,
} from 'features/feed/feedSlice';
import { useGetGlobalFeedQuery } from 'services';

import ArticleList from 'components/ArticleList';
import Pagination from 'components/Pagination';
import ErrorPlaceholder from 'components/ErrorPlaceholder';
import ArticleListPlaceholder from 'components/ArticleListPlaceholder';

import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';

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
  ) : isFetching ? (
    <ArticleListPlaceholder articlesCount={3} />
  ) : null;
}
