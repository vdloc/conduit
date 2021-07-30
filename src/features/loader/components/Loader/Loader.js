import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoaderState } from 'features/loader/loaderSlice';
import styles from './styles.module.scss';

export default function Loader({}) {
  const isLoading = useSelector(selectLoaderState);

  return (
    <div
      className={classNames(styles.loaderWrapper, {
        [styles.loaderWrapperHidden]: !isLoading,
      })}
    >
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
