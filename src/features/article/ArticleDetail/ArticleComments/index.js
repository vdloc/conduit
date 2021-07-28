import Avatar from 'components/Avatar';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/slices/userSlice';
import ArticleComment from '../ArticleComment';

export default function ArticleComments({
  image,
  currentUsername,
  comments = [],
  onSubmitComment,
  onDeleteComment,
}) {
  const currentUser = useSelector(selectCurrentUser);
  return (
    <div className='row'>
      <div className='col-xs-12 col-md-8 offset-md-2'>
        <form className='card comment-form' onSubmit={onSubmitComment}>
          <div className='card-block'>
            <textarea
              className='form-control'
              rows='3'
              placeholder='Write a comment...'
              name='comment'
            ></textarea>
          </div>
          <div className='card-footer'>
            <Avatar
              className='comment-author-img'
              src={currentUser.image}
              alt={currentUser.username}
            />
            <span style={{ display: 'inline-block', marginLeft: '0.5em' }}>
              {currentUser.username}
            </span>
            <button className='btn btn-sm btn-primary' type='submit'>
              Post Comment
            </button>
          </div>
        </form>
        {comments.map((comment) => {
          const { id, createdAt, body, author: { username, image } = {} } =
            comment || {};

          return (
            <ArticleComment
              key={id}
              id={id}
              body={body}
              username={username}
              image={image}
              createdAt={createdAt}
              isOwnedComment={currentUsername && username === currentUsername}
              onDeleteComment={onDeleteComment}
            />
          );
        })}
      </div>
    </div>
  );
}
