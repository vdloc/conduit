import React from 'react';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from 'components/ArticleList';
import Pagination from 'components/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteFeedOffset,
  setFavoriteFeedOffset,
} from 'redux/slices/settingSlice';

export default function FavoriteFeed({ username }) {
  const dispatch = useDispatch();
  const favoriteFeedOffset = useSelector(selectFavoriteFeedOffset);
  const { data } = useGetGlobalFeedQuery({
    favorited: username,
    offset: favoriteFeedOffset,
  });

  function handlePageItemClick(pageId) {
    dispatch(setFavoriteFeedOffset(pageId - 1));
  }

  return data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={favoriteFeedOffset}
        onPageClick={handlePageItemClick}
      />
    </>
  ) : null;
}
