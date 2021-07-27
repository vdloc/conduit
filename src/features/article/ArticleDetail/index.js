import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'store/slices/userSlice';
import {
  useCommentArticleMutation,
  useDeleteArticleMutation,
  useDeleteCommentMutation,
  useFavoriteArticleMutation,
  useFollowUserMutation,
  useGetArticleCommentsQuery,
  useGetArticleQuery,
  useUnfavoriteArticleMutation,
  useUnfollowUserMutation,
} from 'services/api';
import ArticleBody from './ArticleBody';
import ArticleComments from './ArticleComments';
import ArticleActions from './ArticleActions';

export default function ArticleDetail({ slug }) {
  const currentUser = useSelector(selectCurrentUser);
  const [deleteArticle] = useDeleteArticleMutation();
  const [createComment] = useCommentArticleMutation();
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const [favoriteArticle] = useFavoriteArticleMutation();
  const [unfavoriteArticle] = useUnfavoriteArticleMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const { data: article } = useGetArticleQuery(slug);
  const { data: comments } = useGetArticleCommentsQuery(slug);
  const {
    title,
    description,
    body,
    tagList = [],
    updatedAt,
    favorited,
    favoritesCount,
    author: { username, image, following } = {},
  } = article || {};
  const isOwnedArticle = currentUser && currentUser.username === username;

  async function handleDeleteArticle() {
    await deleteArticle(slug);
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
