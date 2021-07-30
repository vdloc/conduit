import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid.').required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required.'),
  username: Yup.string()
    .min(5, 'Username must be at least 8 characters.')
    .max(20, 'Username must be at most 20 characters.')
    .matches(/[A-Za-z0-9]/, {
      message: 'Username can contain only alphanumeric characters.',
    })
    .required('Username is required.'),
});

export default RegisterSchema;
