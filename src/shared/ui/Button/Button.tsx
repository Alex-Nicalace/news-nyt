import clsx from 'clsx';
import styles from './Button.module.scss';
import type { ButtonProps } from './Button.types';

export default function Button({
  className,
  theme = 'clear',
  size = 'm',
  ...props
}: ButtonProps) {
  const classes = clsx(styles.Button, styles[theme], styles[size], className);

  if (props.href !== undefined) return <a className={classes} {...props}></a>;

  return <button className={classes}></button>;
}
