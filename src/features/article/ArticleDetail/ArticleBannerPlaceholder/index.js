import PlaceholderAvatar from 'features/placeholder/loading/PlaceholderAvatar';
import PlaceholderContainer from 'features/placeholder/loading/PlaceholderContainer';
import PlaceholderRow from 'features/placeholder/loading/PlaceholderRow';
import React from 'react';
import styles from './styles.module.scss';

export default function ArticleBannerPlaceholder({}) {
  return (
    <PlaceholderContainer>
      <PlaceholderRow width='300px' height='45px' />
      <PlaceholderRow
        className={styles.description}
        width='150px'
        height='20x'
      />
      <div className={styles.info}>
        <PlaceholderAvatar />
        <div className={styles.meta}>
          <PlaceholderRow
            className={styles.metaItem}
            width='80px'
            height='13px'
          />
          <PlaceholderRow
            className={styles.metaItem}
            width='100px'
            height='13px'
          />
        </div>
      </div>
    </PlaceholderContainer>
  );
}
