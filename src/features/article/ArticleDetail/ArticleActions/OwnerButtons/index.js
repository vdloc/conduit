const { Link } = require('react-router-dom');

export default function OwnerButtons({ slug, onDeleteArticle }) {
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
