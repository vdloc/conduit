export default function GuestButtons({
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
