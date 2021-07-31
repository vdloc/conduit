import classNames from 'classnames';

function createPageList(itemsCount, perPageLimit) {
  return Array.from(
    { length: Math.ceil(itemsCount / perPageLimit) },
    (_, id) => id + 1
  );
}

export default function Pagination({
  articlesCount,
  offset,
  limit = 10,
  onPageClick,
}) {
  const pageList = createPageList(articlesCount, limit);

  return articlesCount > limit ? (
    <ul className='pagination'>
      {pageList.map((pageId) => (
        <li
          className={classNames('page-item', { active: pageId === offset + 1 })}
          key={pageId}
        >
          <a
            className='page-link'
            href=''
            onClick={(e) => {
              e.preventDefault();
              onPageClick(pageId);
            }}
          >
            {pageId}
          </a>
        </li>
      ))}
    </ul>
  ) : null;
}
