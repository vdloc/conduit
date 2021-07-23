import React from 'react';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList/ArticleList';
import Pagination from '../Pagination/Pagination';

export default function TagFeed({ tag, offset, onPageClick }) {
  const { data } = useGetGlobalFeedQuery({ tag, offset });

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
