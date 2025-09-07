import clsx from 'clsx';
import { Title } from 'shared/ui';
import styles from './Header.module.scss';

type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(styles.Header, className)}>
      <Title as="h1">BESIDER</Title>
    </header>
  );
}
