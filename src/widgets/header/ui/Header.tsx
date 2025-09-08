import clsx from 'clsx';
import { useState } from 'react';
import { useMatchMedia } from 'shared/lib';
import { Container, Title } from 'shared/ui';

import type { HeaderNavMode } from '../model';
import { BurgerButton } from './BurgerButton';
import { HeaderNav } from './HeaderNav';

import styles from './Header.module.scss';

type HeaderProps = {
  className?: string;
};

const MEDIA_QUERYS = ['(max-width: 768px)'];

export default function Header({ className }: HeaderProps) {
  const [modeNav, setModeNav] = useState<HeaderNavMode>('closed');
  const [isMobile] = useMatchMedia(MEDIA_QUERYS);
  const modeHeaderNav: HeaderNavMode = isMobile ? modeNav : 'desktop';

  return (
    <header className={clsx(styles.Header, className)}>
      <Container>
        <Title className={styles.title} as="h1">
          BESIDER
        </Title>
        <HeaderNav mode={modeHeaderNav} onClose={() => setModeNav('closed')} />
        {isMobile && (
          <BurgerButton
            className={styles.burger}
            onClick={() => setModeNav('opened')}
          />
        )}
      </Container>
    </header>
  );
}
