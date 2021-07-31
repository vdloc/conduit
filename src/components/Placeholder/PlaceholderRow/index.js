import defaultStyles from './styles.module.scss';

export default function PlaceholderRow({ width, height, className }) {
  const componentClassname = className
    ? `${defaultStyles.PlaceholderRow} ${className}`
    : defaultStyles.PlaceholderRow;

  return <div className={componentClassname} style={{ width, height }}></div>;
}
