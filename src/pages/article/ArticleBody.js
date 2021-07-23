import React from 'react';
import TagList from 'components/Tag/TagList';

export default function ArticleBody({ body, tags }) {
  return (
    <div className='row post-content'>
      <div className='col-md-12'>{body}</div>
      <div className='col-md-12'>
        <TagList tags={tags} />
      </div>
    </div>
  );
}
