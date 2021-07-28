import PlaceholderAvatar from 'features/placeholder/loading/PlaceholderAvatar';
import PlaceholderContainer from 'features/placeholder/loading/PlaceholderContainer';
import PlaceholderRow from 'features/placeholder/loading/PlaceholderRow';
import React from 'react';
import styles from './styles.module.scss';

export default function ProfileBannerPlaceholder() {
  return (
    <PlaceholderContainer className={styles.ProfileBannerPlaceholder}>
      <PlaceholderAvatar />
      <PlaceholderRow width='200px' height='30px' />
      <PlaceholderRow width='150px' height='20px' />
    </PlaceholderContainer>
  );
}
