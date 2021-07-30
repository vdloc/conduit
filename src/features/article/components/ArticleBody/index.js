import React from 'react';
import ReactMarkdown from 'react-markdown';

import TagList from 'components/TagList';

export default function ArticleBody({ body, tags }) {
  return (
    <div className='row post-content'>
      <div className='col-md-12'>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
      <div className='col-md-12'>
        <TagList tags={tags} />
      </div>
    </div>
  );
}
