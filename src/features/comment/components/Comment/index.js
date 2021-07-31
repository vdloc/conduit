import { Link } from 'react-router-dom';
import Avatar from 'components/Avatar';

export default function Comment({
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
        <Link
          className='comment-author'
          to={profileLink}
          style={{ marginLeft: '0.5em' }}
        >
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
