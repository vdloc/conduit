import React from 'react';

export default function TagList({ tags }) {
  if (!tags?.length) return null;

  return (
    <ul className='tag-list'>
      {tags.map((tag) => (
        <li className='tag-default tag-pill tag-outline'>{tag}</li>
      ))}
    </ul>
  );
}
