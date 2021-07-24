import Article from 'components/Article';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function ArticlePage() {
  const { slug } = useParams();

  return (
    <div className='article-page'>
      <Article slug={slug} />
    </div>
  );
}
