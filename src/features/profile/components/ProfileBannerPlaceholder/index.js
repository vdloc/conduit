import React from 'react';

import PlaceholderAvatar from 'components/Placeholder/PlaceholderAvatar';
import PlaceholderContainer from 'components/Placeholder/PlaceholderContainer';
import PlaceholderRow from 'components/Placeholder/PlaceholderRow';

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
