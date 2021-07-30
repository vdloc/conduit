import React from 'react';
import styles from './styles.module.scss';

export default function PlaceholderAvatar({ className }) {
  const componentClassname = className
    ? `${styles.PlaceholderAvatar} ${className}`
    : styles.PlaceholderAvatar;

  return <div className={componentClassname}></div>;
}
