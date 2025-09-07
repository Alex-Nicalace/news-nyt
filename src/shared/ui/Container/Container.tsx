import clsx from 'clsx';
import { createElement, type JSX } from 'react';

import styles from './Container.module.scss';

type Tags = keyof JSX.IntrinsicElements;
type ContainerProps<T extends Tags> = {
  tag?: T;
} & JSX.IntrinsicElements[T];
export default function Container<T extends Tags>({
  tag,
  className,
  ...props
}: ContainerProps<T>) {
  const tagName = tag ?? 'div';

  return createElement(tagName, {
    className: clsx(styles.Container, className),
    ...props,
  });
}
