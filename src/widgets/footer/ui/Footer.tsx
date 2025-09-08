import clsx from 'clsx';
import { Container } from 'shared/ui';
import styles from './Footer.module.scss';
import { FooterNav } from './FooterNav';
import { PoweredBy } from './PoweredBy';

type FooterProps = {
  className?: string;
};
export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <Container tag="footer" className={clsx(styles.Footer, className)}>
      <FooterNav />
      <PoweredBy />
      <p>{`©${currentYear} Besider. Inspired by Insider`}</p>
    </Container>
  );
}
