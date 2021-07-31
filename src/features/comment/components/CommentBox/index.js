import { useDispatch, useSelector } from 'react-redux';
import Avatar from 'components/Avatar';
import {
  commentArticle,
  selectCommentValue,
  setCommentValue,
} from 'features/comment/commentSlice';

export default function CommentBox({ currentUser, slug }) {
  const dispatch = useDispatch();
  const currentValue = useSelector(selectCommentValue);

  function handleCommentArticle(e) {
    e.preventDefault();
    dispatch(commentArticle(slug));
  }

  function handleChange(e) {
    const { value } = e.target;
    dispatch(setCommentValue(value));
  }

  return (
    <form className='card comment-form' onSubmit={handleCommentArticle}>
      <div className='card-block'>
        <textarea
          className='form-control'
          rows='3'
          placeholder='Write a comment...'
          name='comment'
          value={currentValue}
          onChange={handleChange}
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
  );
}
