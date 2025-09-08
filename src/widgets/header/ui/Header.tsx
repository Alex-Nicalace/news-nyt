import clsx from 'clsx';
import { useState } from 'react';
import { Container, Title } from 'shared/ui';
import type { HeaderNavMode } from '../model';
import { BurgerButton } from './BurgerButton';
import { HeaderNav } from './HeaderNav';

import styles from './Header.module.scss';
type HeaderProps = {
  className?: string;
};
export default function Header({ className }: HeaderProps) {
  const [modeNav, setModeNav] = useState<HeaderNavMode>('closed');

  return (
    <header className={clsx(styles.Header, className)}>
      <Container>
        <Title className={styles.title} as="h1">
          BESIDER
        </Title>
        <HeaderNav mode={modeNav} onClose={() => setModeNav('closed')} />
        <BurgerButton
          className={styles.burger}
          onClick={() => setModeNav('opened')}
        />
      </Container>
    </header>
  );
}
