import { useDispatch, useSelector } from 'react-redux';

import { selectOwnFeedOffset, setOwnFeedOffset } from 'features/feed/feedSlice';
import { useGetGlobalFeedQuery } from 'services';

import ArticleList from 'components/ArticleList';
import ArticleListPlaceholder from 'components/ArticleListPlaceholder';
import Pagination from 'components/Pagination';
import ErrorPlaceholder from 'components/ErrorPlaceholder';

import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';

export default function UserOwnedFeed({ username }) {
  const dispatch = useDispatch();
  const ownFeedOffset = useSelector(selectOwnFeedOffset);
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetGlobalFeedQuery({
      offset: ownFeedOffset,
      author: username,
    });

  function handlePageItemClick(pageId) {
    dispatch(setOwnFeedOffset(pageId - 1));
  }

  useErrorNotification({
    message: `Can't get the user feed !`,
    toastId: 'UserFeed',
    isError,
  });
  useDisplayLoaderWhileFetch(isFetching, isLoading);

  return isSuccess && data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={ownFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : isError ? (
    <ErrorPlaceholder />
  ) : isFetching ? (
    <ArticleListPlaceholder articlesCount={3} />
  ) : null;
}
