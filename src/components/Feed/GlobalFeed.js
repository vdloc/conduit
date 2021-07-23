import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useGetGlobalFeedQuery } from 'services/api';
import ArticleList from '../ArticleList/ArticleList';
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
