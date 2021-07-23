import React from 'react';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList/ArticleList';
import Pagination from '../Pagination/Pagination';

export default function UserFeed({ username, offset = 0, onPageClick }) {
  const { data } = useGetGlobalFeedQuery({ offset, author: username });

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
