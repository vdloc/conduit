import { useFormikContext } from 'formik';

export default function ErrorMessages({ extraMessages = [], order = [] }) {
  const { errors, touched } = useFormikContext();
  const errorMessages = Object.entries(errors)
    .filter(([field]) => touched[field])
    .sort(([a], [b]) => order.indexOf(a) - order.indexOf(b))
    .flatMap(([_field, value]) => value);

  return (
    <ul className='error-messages'>
      {[...extraMessages, ...errorMessages].map((message, id) => (
        <li key={id}>{message}</li>
      ))}
    </ul>
  );
}
