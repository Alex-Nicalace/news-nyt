import clsx from 'clsx';
import styles from './Footer.module.scss';

type FooterProps = {
  className?: string;
};
export default function Footer({ className }: FooterProps) {
  return <footer className={clsx(styles.Footer, className)}>footer</footer>;
}
