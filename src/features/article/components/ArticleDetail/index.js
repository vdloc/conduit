import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useGetArticleQuery } from 'services';
import { selectCurrentUser } from 'features/user/userSlice';

import BannerPlaceholder from '../BannerPlaceholder';
import BodyPlaceholder from '../BodyPlaceholder';
import ArticleBody from '../ArticleBody';
import UserActions from '../UserActions';
import { CommentSection } from 'features/comment';

export default function ArticleDetail() {
  const { slug } = useParams();
  const currentUser = useSelector(selectCurrentUser) || {};
  const { data: article, isLoading: isArticleLoading } =
    useGetArticleQuery(slug);
  const {
    title,
    description,
    body,
    tagList = [],
    author: { username } = {},
  } = article || {};
  const isOwnedArticle = currentUser && currentUser.username === username;

  return (
    <div className='article-page'>
      <div className='banner'>
        <div className='container'>
          {isArticleLoading ? (
            <BannerPlaceholder />
          ) : (
            <>
              <h1>{title}</h1>
              <p>{description}</p>
              <UserActions article={article} isOwnedArticle={isOwnedArticle} />
            </>
          )}
        </div>
      </div>
      <div className='container page'>
        {isArticleLoading ? (
          <BodyPlaceholder />
        ) : (
          <>
            <ArticleBody body={body} tags={tagList} />
            <hr />
            <div className='article-actions'>
              <UserActions article={article} isOwnedArticle={isOwnedArticle} />
            </div>
          </>
        )}
        <CommentSection currentUser={currentUser} slug={slug} />
      </div>
    </div>
  );
}
