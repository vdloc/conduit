import Avatar from 'components/Avatar';
import React from 'react';
import { Link } from 'react-router-dom';
import GuestButtons from './GuestButtons';
import OwnerButtons from './OwnerButtons';

export default function ArticleActions({
  slug,
  following,
  username,
  image,
  updatedAt,
  favoritesCount,
  onDeleteArticle,
  onFollowAuthor,
  onFavoriteArticle,
  isOwnedArticle,
}) {
  return (
    <div className='article-meta'>
      <Link to={`/@${username}`}>
        <Avatar src={image} alt={username} />
      </Link>
      <div className='info'>
        <Link to={`/@${username}`} className='author'>
          {username}
        </Link>
        <span className='date'>{updatedAt}</span>
      </div>
      {isOwnedArticle ? (
        <OwnerButtons slug={slug} onDeleteArticle={onDeleteArticle} />
      ) : (
        <GuestButtons
          username={username}
          following={following}
          favoritesCount={favoritesCount}
          onFollowAuthor={onFollowAuthor}
          onFavoriteArticle={onFavoriteArticle}
        />
      )}
    </div>
  );
}
