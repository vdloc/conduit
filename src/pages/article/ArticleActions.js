import React from 'react';
import { Link } from 'react-router-dom';

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
  const followAuthorIconClass = `ion-${following ? 'minus' : 'plus'}-round`;

  return (
    <div className='article-meta'>
      <Link to={`/@${username}`}>
        <img src={image} alt={username} />
      </Link>
      <div className='info'>
        <Link to={`/@${username}`} className='author'>
          {username}
        </Link>
        <span className='date'>{updatedAt}</span>
      </div>
      {isOwnedArticle ? (
        <span>
          <Link class='btn btn-outline-secondary btn-sm' to={`/editor/${slug}`}>
            <i class='ion-edit'></i> Edit Article
          </Link>{' '}
          <button
            class='btn btn-outline-danger btn-sm'
            onClick={onDeleteArticle}
          >
            <i class='ion-trash-a'></i> Delete Article
          </button>
        </span>
      ) : (
        <>
          <button
            className='btn btn-sm btn-outline-secondary'
            onClick={onFollowAuthor}
          >
            <i className={followAuthorIconClass}></i>
            &nbsp; {following ? 'Unfollow' : 'Follow'} {username}
          </button>
          &nbsp;&nbsp;
          <button
            className='btn btn-sm btn-outline-primary'
            onClick={onFavoriteArticle}
          >
            <i className='ion-heart'></i>
            &nbsp; Favorite Post &nbsp;
            <span className='counter'>({favoritesCount})</span>
          </button>
        </>
      )}
    </div>
  );
}
