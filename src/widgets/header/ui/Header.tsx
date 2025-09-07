import clsx from 'clsx';
import { Container, Title } from 'shared/ui';
import { BurgerButton } from './BurgerButton';
import styles from './Header.module.scss';

type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  return (
    <header className={clsx(styles.Header, className)}>
      <Container>
        <BurgerButton className={styles.burger} />
        <Title className={styles.title} as="h1">
          BESIDER
        </Title>
      </Container>
    </header>
  );
}
