import ArticleListItemPlaceholder from 'components/ArticleListItemPlaceholder';

export default function ArticleListPlaceholder({ articlesCount = 0 }) {
  const items = Array.from({ length: articlesCount });

  return items.map(() => <ArticleListItemPlaceholder />);
}
