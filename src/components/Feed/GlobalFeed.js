import React from 'react';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList';
import Pagination from '../Pagination/Pagination';

export default function GlobalFeed({ offset, onPageClick }) {
  const { data } = useGetGlobalFeedQuery({ offset });

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
