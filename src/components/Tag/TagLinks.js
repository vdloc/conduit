import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useGetTagsQuery } from 'services/api';

export default function TagBox() {
  const { state: navigationState } = useLocation();
  const { data, error, isLoading, isFetching } = useGetTagsQuery();

  return (
    <div className='tag-list'>
      {data?.tags.length
        ? data.tags.map((tag) => (
            <Link
              className='tag-pill tag-default'
              to={{
                pathname: '/',
                state: {
                  ...navigationState,
                  tag: { tagName: tag, offset: 0 },
                  activeTab: 2,
                },
              }}
            >
              {tag}
            </Link>
          ))
        : ''}
    </div>
  );
}
