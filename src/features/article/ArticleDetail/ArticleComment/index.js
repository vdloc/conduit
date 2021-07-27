import Avatar from 'components/Avatar';
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
    <div className='card'>
      <div className='card-block'>
        <p className='card-text'>{body}</p>
      </div>
      <div className='card-footer'>
        <Link className='comment-author' to={profileLink}>
          <Avatar className='comment-author-img' src={image} alt={username} />
        </Link>{' '}
        <Link className='comment-author' to={profileLink}>
          {username}
        </Link>{' '}
        <span className='date-posted'>{createdAt}</span>
        {isOwnedComment && (
          <span className='mod-options' onClick={() => onDeleteComment(id)}>
            <i className='ion-trash-a'></i>
          </span>
        )}
      </div>
    </div>
  );
}
