import React from 'react';

import PlaceholderAvatar from 'components/Placeholder/PlaceholderAvatar';
import PlaceholderContainer from 'components/Placeholder/PlaceholderContainer';
import PlaceholderRow from 'components/Placeholder/PlaceholderRow';

import styles from './styles.module.scss';

export default function ArticleListItemPlaceholder() {
  return (
    <PlaceholderContainer>
      <div className={styles.PlaceHolderItemWrapper}>
        <div className={styles.PlaceHolderItemMeta}>
          <PlaceholderAvatar />
          <div className={styles.PlaceHolderItemInfo}>
            <PlaceholderRow width='80px' height='13px' />
            <PlaceholderRow width='100px' height='13px' />
          </div>
        </div>
        <div className={styles.PlaceHolderItemContent}>
          <PlaceholderRow width='400px' height='25px' />
          <PlaceholderRow width='150px' height='20px' />
          <PlaceholderRow width='100px' height='16px' />
        </div>
      </div>
    </PlaceholderContainer>
  );
}
