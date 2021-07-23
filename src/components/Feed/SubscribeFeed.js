import React from 'react';
import { useGetSubscribedFeedQuery } from 'services/api';
import ArticleList from '../ArticleList/ArticleList';
import Pagination from '../Pagination/Pagination';
console.log('~ useGetSubscribedFeedQuery', useGetSubscribedFeedQuery);

export default function SubscribeFeed({ offset = 0, onPageClick }) {
  const { data } = useGetSubscribedFeedQuery({ offset });

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
