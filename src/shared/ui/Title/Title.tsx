import clsx from 'clsx';
import { createElement, type JSX } from 'react';
import styles from './Title.module.scss';

type Tag = 'h1' | 'h2';
type TitleProps<T extends Tag> = { as?: T } & JSX.IntrinsicElements[T];

export default function Title<T extends Tag>({
  as,
  className,
  ...props
}: TitleProps<T>) {
  const nameTag = as ?? 'h2';

  return createElement(nameTag, {
    className: clsx(styles.Title, styles[nameTag], className),
    ...props,
  });
}
