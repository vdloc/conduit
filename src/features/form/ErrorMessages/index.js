import React from 'react';
import { useFormikContext } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';

export default function ErrorMessages({ extraMessages = [], order = [] }) {
  const [messages, setMessages] = useState(() => [...extraMessages]);
  const { errors, touched } = useFormikContext();

  useEffect(() => {
    let errorMessages = Object.entries(errors)
      .filter(([field]) => touched[field])
      .sort(([a], [b]) => order.indexOf(a) - order.indexOf(b))
      .flatMap(([_field, value]) => value);

    setMessages([...extraMessages, ...errorMessages]);
  }, [errors, touched, extraMessages]);

  return (
    <ul className='error-messages'>
      {messages.map((message, id) => (
        <li key={id}>{message}</li>
      ))}
    </ul>
  );
}
