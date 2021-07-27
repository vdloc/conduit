import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoaderState } from 'redux/slices/loaderSlice';
import style from './Loader.module.scss';

export default function Loader({}) {
  const isLoading = useSelector(selectLoaderState);

  return (
    <div
      className={classNames(style.loaderWrapper, {
        [style.loaderWrapperHidden]: !isLoading,
      })}
    >
      <div className={style.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
