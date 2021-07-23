import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  useGetArticleQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
} from 'services/api';

export default function Editor() {
  const history = useHistory();
  const { slug } = useParams();
  const { data } = useGetArticleQuery(slug, { skip: !slug });
  const [formState, setFormState] = useState({});
  const [createArticle] = useCreateArticleMutation();
  const [updateArticle] = useUpdateArticleMutation();

  async function handlePublishArticle(e) {
    e.preventDefault();

    const publishResult =
      slug && data
        ? await updateArticle({ slug, data: formState }).unwrap()
        : await createArticle(formState).unwrap();
    const updatedSlug = publishResult?.article?.slug;

    if (updatedSlug) {
      history.push(`/article/${updatedSlug}`);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  }

  useEffect(() => {
    if (slug && data) {
      setFormState(data.article);
    }
  }, [slug, data]);

  return (
    <div className='editor-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-10 offset-md-1 col-xs-12'>
            <form onSubmit={handlePublishArticle}>
              <fieldset>
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Article Title'
                    name='title'
                    value={formState.title}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder="What's this article about?"
                    name='description'
                    value={formState.description}
                    onChange={handleChange}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <textarea
                    className='form-control'
                    rows='8'
                    placeholder='Write your article (in markdown)'
                    name='body'
                    value={formState.body}
                    onChange={handleChange}
                  ></textarea>
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Enter tags'
                    value={formState.tags}
                    onChange={handleChange}
                  />
                  <div className='tag-list'></div>
                </fieldset>
                <button
                  className='btn btn-lg pull-xs-right btn-primary'
                  type='submit'
                >
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
