import React from 'react';
import { Link } from 'react-router-dom';
import {
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
} from 'services/api';

function TagList({ tags }) {
  return (
    <ul className='tag-list'>
      {tags.map((tag) => (
        <li className='tag-default tag-pill tag-outline'>{tag}</li>
      ))}
    </ul>
  );
}

export default function Article({ article }) {
  const {
    slug,
    title,
    description,
    tagList,
    updatedAt,
    favorited,
    favoritesCount,
    author: { username, image },
  } = article;
  const [favoriteArticle] = useFavoriteArticleMutation();
  const [unfavoriteArticle] = useUnfavoriteArticleMutation();

  async function handleFavoriteArticle() {
    favorited ? await unfavoriteArticle(slug) : await favoriteArticle(slug);
  }

  return (
    <div className='article-preview'>
      <div className='article-meta'>
        <Link to={`/@${username}`}>
          <img src={image} alt={`${username} avatar`} />
        </Link>
        <div className='info'>
          <Link className='author' to={`/@${username}`}>
            {username}
          </Link>
          <span className='date'>{updatedAt}</span>
        </div>
        <button
          className='btn btn-outline-primary btn-sm pull-xs-right'
          onClick={handleFavoriteArticle}
        >
          <i className='ion-heart'></i> {favoritesCount}
        </button>
      </div>
      <Link to={`/article/${slug}`} className='preview-link'>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <TagList tags={tagList} />
      </Link>
    </div>
  );
}
