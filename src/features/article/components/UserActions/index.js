import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Avatar from 'components/Avatar';
import {
  favoriteArticle,
  followUser,
  unfavoriteArticle,
  unfollowUser,
} from 'features/article/articleSlice';
import { useDeleteArticleMutation } from 'services';
import GuestButtons from './components/GuestButtons';
import OwnerButtons from './components/OwnerButtons';

export default function UserActions({ article, isOwnedArticle }) {
  const dispatch = useDispatch();
  const [deleteArticle] = useDeleteArticleMutation();
  const {
    createdAt,
    slug,
    favoritesCount,
    favorited,
    author: { username, image, following } = {},
  } = article || {};

  function handleFollowAuthor() {
    dispatch(following ? unfollowUser(username) : followUser(username));
  }

  function handleFavoriteArticle() {
    dispatch(favorited ? unfavoriteArticle(slug) : favoriteArticle(slug));
  }

  async function handleDeleteArticle() {
    await deleteArticle(slug);
  }

  return (
    <div className='article-meta'>
      <Link to={`/@${username}`}>
        <Avatar src={image} alt={username} />
      </Link>
      <div className='info'>
        <Link to={`/@${username}`} className='author'>
          {username}
        </Link>
        <span className='date'>{createdAt}</span>
      </div>
      {isOwnedArticle ? (
        <OwnerButtons slug={slug} onDeleteArticle={handleDeleteArticle} />
      ) : (
        <GuestButtons
          username={username}
          following={following}
          favoritesCount={favoritesCount}
          onFollowAuthor={handleFollowAuthor}
          onFavoriteArticle={handleFavoriteArticle}
        />
      )}
    </div>
  );
}
