import React from 'react';
import styles from './styles.module.scss';
import PlaceholderAvatar from 'features/placeholder/loading/PlaceholderAvatar';
import PlaceholderContainer from 'features/placeholder/loading/PlaceholderContainer';
import PlaceholderRow from 'features/placeholder/loading/PlaceholderRow';

export default function ArticleBodyPlaceholder() {
  return (
    <PlaceholderContainer className={styles.body}>
      <PlaceholderRow width='300px' height='25' />
      <PlaceholderRow width='350px' height='25' />
      <PlaceholderRow width='250px' height='25px' />
      <hr />
      <div className={styles.meta}>
        <PlaceholderAvatar />
        <PlaceholderRow width='100px' height='30px' />
        <PlaceholderRow width='150px' height='30px' />
      </div>
    </PlaceholderContainer>
  );
}
