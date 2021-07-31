import { useSelector, useDispatch } from 'react-redux';

import {
  selectTagFeedOffset,
  selectTagName,
  setTagFeedOffset,
} from 'features/feed/feedSlice';
import { useGetGlobalFeedQuery } from 'services';

import ArticleList from 'components/ArticleList';
import ArticleListPlaceholder from 'components/ArticleListPlaceholder';
import Pagination from 'components/Pagination';
import ErrorPlaceholder from 'components/ErrorPlaceholder';

import useDisplayLoaderWhileFetch from 'hooks/useDisplayLoaderWhileFetch';
import useErrorNotification from 'hooks/useErrorNotification';

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
  ) : isLoading ? (
    <ArticleListPlaceholder articlesCount={4} />
  ) : null;
}
