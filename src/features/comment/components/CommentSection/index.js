import React from 'react';
import { useDeleteCommentMutation, useGetArticleCommentsQuery } from 'services';
import Comment from '../Comment';
import CommentBox from '../CommentBox';

export default function CommentSection({ currentUser, slug }) {
  const { data: comments } = useGetArticleCommentsQuery(slug);
  const [deleteComment] = useDeleteCommentMutation();

  async function handleDeleteComment(id) {
    await deleteComment({ slug, id });
  }

  return (
    <div className='row'>
      <div className='col-xs-12 col-md-8 offset-md-2'>
        <CommentBox currentUser={currentUser} slug={slug} />
        {/* Article comments */}
        {comments &&
          comments.map((comment) => {
            const {
              id,
              createdAt,
              body,
              author: { username, image } = {},
            } = comment || {};

            return (
              <Comment
                key={id}
                id={id}
                body={body}
                username={username}
                image={image}
                createdAt={createdAt}
                isOwnedComment={
                  currentUser && username === currentUser.username
                }
                onDeleteComment={handleDeleteComment}
              />
            );
          })}
      </div>
    </div>
  );
}
