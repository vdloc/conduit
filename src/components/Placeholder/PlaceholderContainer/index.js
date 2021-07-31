import styles from './styles.module.scss';

export default function PlaceholderContainer({ children, className }) {
  const componentClassname = className
    ? `${styles.PlaceholderContainer} ${className}`
    : styles.PlaceholderContainer;

  return <div className={componentClassname}>{children}</div>;
}
