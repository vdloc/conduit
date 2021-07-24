import React from 'react';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCurrentUser } from 'redux/slices/userSlice';
import {
  useCommentArticleMutation,
  useDeleteArticleMutation,
  useDeleteCommentMutation,
  useFavoriteArticleMutation,
  useFollowUserMutation,
  useGetArticleQuery,
  useUnfavoriteArticleMutation,
  useUnfollowUserMutation,
} from 'services/api';
import ArticleActions from './ArticleActions';
import ArticleBody from './ArticleBody';
import ArticleComments from './ArticleComments';

export default function Article({ slug }) {
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();
  const [deleteArticle] = useDeleteArticleMutation();
  const [createComment] = useCommentArticleMutation();
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const [favoriteArticle] = useFavoriteArticleMutation();
  const [unfavoriteArticle] = useUnfavoriteArticleMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const { data } = useGetArticleQuery(slug);
  const {
    title,
    description,
    body,
    tagList = [],
    updatedAt,
    favorited,
    favoritesCount,
    author: { username, image, following } = {},
  } = data?.article || {};
  const comments = data?.comments;
  const isOwnedArticle = currentUser && currentUser.username === username;

  async function handleDeleteArticle() {
    await deleteArticle(slug);
    history.push('/');
  }

  async function handleFollowAuthor() {
    following ? await unfollowUser(username) : await followUser(username);
  }

  async function handleFavoriteArticle() {
    favorited ? await unfavoriteArticle(slug) : await favoriteArticle(slug);
  }

  async function handleSubmitComment(e) {
    e.preventDefault();

    const commentInput = e.target.comment;

    await createComment({ slug, comment: commentInput.value });
    commentInput.value = '';
  }

  async function handleDeleteComment(id) {
    await deleteComment({ slug, id });
  }

  return (
    <>
      <div className='banner'>
        <div className='container'>
          <h1>{title}</h1>
          <p>{description}</p>
          <ArticleActions
            slug={slug}
            image={image}
            updatedAt={updatedAt}
            following={following}
            username={username}
            favoritesCount={favoritesCount}
            onDeleteArticle={handleDeleteArticle}
            onFollowAuthor={handleFollowAuthor}
            onFavoriteArticle={handleFavoriteArticle}
            isOwnedArticle={isOwnedArticle}
          />
        </div>
      </div>
      <div className='container page'>
        <ArticleBody body={body} tags={tagList} />
        <hr />
        <div className='article-actions'>
          <ArticleActions
            slug={slug}
            following={following}
            username={username}
            favoritesCount={favoritesCount}
            onDeleteArticle={handleDeleteArticle}
            onFollowAuthor={handleFollowAuthor}
            onFavoriteArticle={handleFavoriteArticle}
            isOwnedArticle={isOwnedArticle}
          />
        </div>
        <ArticleComments
          image={image}
          comments={comments}
          currentUsername={currentUser?.username}
          onSubmitComment={handleSubmitComment}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  );
}
