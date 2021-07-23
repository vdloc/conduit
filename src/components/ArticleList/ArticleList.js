import React from 'react';
import Article from '../Article/Article';

export default function ArticleList({ articles }) {
  if (!articles.length) return <p>No articles are here... yet.</p>;

  return articles.map((article) => (
    <Article article={article} key={article.slug} />
  ));
}
