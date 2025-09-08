import clsx from 'clsx';
import { Button } from 'shared/ui/Button';
import { NAV_LINKS } from '../../model';
import styles from './FooterNav.module.scss';

type FooterNavProps = {
  className?: string;
};
export default function FooterNav({ className }: FooterNavProps) {
  return (
    <nav className={clsx(styles.FooterNav, className)}>
      <ul className={styles.list}>
        {NAV_LINKS.map(({ title, href }) => (
          <li key={href} className={styles.item}>
            <Button href={href}>{title}</Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
