import React from 'react';

const defaultMessage = 'Oops, There are something wrong!';

export default function ErrorPlaceholder({ message = defaultMessage }) {
  return <p>{message}</p>;
}
