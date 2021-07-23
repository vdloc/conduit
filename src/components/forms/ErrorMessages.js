import React from 'react';

export default function ErrorMessages({ messages }) {
  if (!messages.length) return null;

  return (
    <ul className='error-messages'>
      {messages.map((message, id) => (
        <li key={id}>{message}</li>
      ))}
    </ul>
  );
}
