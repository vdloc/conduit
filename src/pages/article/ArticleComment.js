import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleComment({
  body,
  id,
  username,
  image,
  createdAt,
  isOwnedComment,
  onDeleteComment,
}) {
  const profileLink = `/@${username}`;
  return (
    <div class='card'>
      <div class='card-block'>
        <p class='card-text'>{body}</p>
      </div>
      <div class='card-footer'>
        <Link class='comment-author' to={profileLink}>
          <img class='comment-author-img' src={image} alt={username} />
        </Link>{' '}
        <Link class='comment-author' to={profileLink}>
          {username}
        </Link>{' '}
        <span class='date-posted'>{createdAt}</span>
        {isOwnedComment && (
          <span class='mod-options' onClick={() => onDeleteComment(id)}>
            <i class='ion-trash-a'></i>
          </span>
        )}
      </div>
    </div>
  );
}
