import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import classNames from 'classnames';

import { CreateArticleSchema, UpdateArticleSchema } from './schema';
import { displayLoader } from 'features/loader/loaderSlice';
import ErrorMessages from 'components/Form/ErrorMessages';
import {
  useCreateArticleMutation,
  useGetArticleQuery,
  useUpdateArticleMutation,
} from 'services';

export default function EditorForm() {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    body: '',
    tagList: '',
  });
  const [asyncMessages, setAsyncMessages] = useState([]);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { data: article, isFetching } = useGetArticleQuery(slug, {
    skip: !slug, // skip get article request if no slug was specified
  });
  const [createArticle] = useCreateArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();
  const schema = useMemo(() => {
    return article ? UpdateArticleSchema : CreateArticleSchema;
  }, [article]);

  async function handleSubmit(values) {
    slug && article
      ? await updateArticle({ slug, data: values }).unwrap()
      : await createArticle(values).unwrap();
  }

  function createCustomChangeHandler(handleChange) {
    return function (e) {
      handleChange(e);

      // Clean the async error messages when user is updating the form again.
      if (asyncMessages.length) {
        setAsyncMessages([]);
      }
    };
  }

  useEffect(() => {
    if (slug && article) {
      setFormState(article);
    }
  }, [slug, article]);

  useEffect(() => {
    if (isFetching) {
      dispatch(displayLoader());
    }
  }, [isFetching, dispatch]);

  return (
    <Formik
      initialValues={formState}
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({ isSubmitting, isValid, dirty, handleChange }) => {
        const isSubmitDisabled = isSubmitting || !dirty || !isValid;
        const customChangeHandler = createCustomChangeHandler(handleChange);

        return (
          <>
            <ErrorMessages
              order={['title', 'description', 'body', 'tagList']}
              extraMessages={asyncMessages}
            />
            <Form>
              <fieldset>
                <fieldset className='form-group'>
                  <Field
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Article Title'
                    name='title'
                    onChange={customChangeHandler}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Field
                    type='text'
                    className='form-control'
                    placeholder="What's this article about?"
                    name='description'
                    onChange={customChangeHandler}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <Field
                    as='textarea'
                    className='form-control'
                    rows='8'
                    placeholder='Write your article (in markdown)'
                    name='body'
                    onChange={customChangeHandler}
                  ></Field>
                </fieldset>
                <fieldset className='form-group'>
                  <Field
                    type='text'
                    className='form-control'
                    placeholder='Enter tags'
                    name='tagList'
                    onChange={customChangeHandler}
                  />
                  <div className='tag-list'></div>
                </fieldset>
                <button
                  className={classNames(
                    'btn btn-lg btn-primary pull-xs-right',
                    {
                      disabled: isSubmitDisabled,
                    }
                  )}
                  disabled={isSubmitDisabled}
                  type='submit'
                >
                  Publish Article
                </button>
              </fieldset>
            </Form>
          </>
        );
      }}
    </Formik>
  );
}
