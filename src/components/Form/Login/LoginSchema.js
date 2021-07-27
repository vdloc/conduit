import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email is invalid.').required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .max(50, 'Password must be at most 50 characters')
    .required('Password is required.'),
});

export default LoginSchema;
