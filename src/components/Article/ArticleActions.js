import Avatar from 'components/Avatar';
import React from 'react';
import { Link } from 'react-router-dom';

function OwnerButtons({ slug, onDeleteArticle }) {
  return (
    <span>
      <Link className='btn btn-outline-secondary btn-sm' to={`/editor/${slug}`}>
        <i className='ion-edit'></i> Edit Article
      </Link>{' '}
      <button
        className='btn btn-outline-danger btn-sm'
        onClick={onDeleteArticle}
      >
        <i className='ion-trash-a'></i> Delete Article
      </button>
    </span>
  );
}

function GuestButtons({
  username,
  following,
  favoritesCount,
  onFollowAuthor,
  onFavoriteArticle,
}) {
  const followAuthorIconClass = `ion-${following ? 'minus' : 'plus'}-round`;

  return (
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
  );
}

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
