import * as Yup from 'yup';

export const UpdateArticleSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'The title must be at least 5 characters.')
    .max(50, 'The title must be at most 50 characters.')
    .notRequired(),
  description: Yup.string()
    .max(100, 'The description must be at most 100 characters.')
    .notRequired(),
  body: Yup.string().notRequired(),
  tagList: Yup.array()
    .of(Yup.string().max(20, 'The tag must be at most 20 characters.'))
    .notRequired(),
});

export const CreateArticleSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, 'The title must be at least 5 characters.')
    .max(50, 'The title must be at most 50 characters.')
    .required('The title is required.'),
  description: Yup.string()
    .max(100, 'The description must be at most 100 characters.')
    .required('The description is required.'),
  body: Yup.string().required('The description is required.'),
  tagList: Yup.array()
    .of(Yup.string().max(20, 'The tag must be at most 20 characters.'))
    .notRequired(),
});
