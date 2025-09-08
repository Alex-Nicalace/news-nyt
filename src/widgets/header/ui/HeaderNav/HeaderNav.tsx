import clsx from 'clsx';
import { Container } from 'shared/ui';
import { Button } from 'shared/ui/Button';
import { NAV_LINKS, type HeaderNavMode } from '../../model';
import styles from './HeaderNav.module.scss';

type HeaderNavProps = {
  className?: string;
  mode: HeaderNavMode;
  onClose: () => void;
};
export default function HeaderNav({
  className,
  mode,
  onClose,
}: HeaderNavProps) {
  const isDesktop = mode === 'desktop';

  return (
    <Container
      tag="nav"
      className={clsx(styles.HeaderNav, styles[mode], className)}
    >
      <ul className={styles.list}>
        {NAV_LINKS.map(({ title, href }) => (
          <li className={styles.item} key={href}>
            <Button href={href} size={isDesktop ? 'm' : 'l'}>
              {title}
            </Button>
          </li>
        ))}
      </ul>
      {!isDesktop && (
        <button
          className={styles.btnClose}
          aria-label="Close menu"
          onClick={onClose}
        />
      )}
    </Container>
  );
}
