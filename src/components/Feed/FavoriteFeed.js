import React from 'react';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from 'components/ArticleList/ArticleList';
import Pagination from 'components/Pagination/Pagination';

export default function FavoriteFeed({ username, offset, onPageClick }) {
  const { data } = useGetGlobalFeedQuery({ favorited: username, offset });

  return data ? (
    <>
      <ArticleList articles={data.articles} />
      <Pagination
        articlesCount={data.articlesCount}
        offset={offset}
        onPageClick={onPageClick}
      />
    </>
  ) : null;
}
