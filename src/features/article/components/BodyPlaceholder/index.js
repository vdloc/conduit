import React from 'react';

import PlaceholderAvatar from 'components/Placeholder/PlaceholderAvatar';
import PlaceholderContainer from 'components/Placeholder/PlaceholderContainer';
import PlaceholderRow from 'components/Placeholder/PlaceholderRow';

import styles from './styles.module.scss';

export default function BodyPlaceholder() {
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
