import clsx from 'clsx';
import poweredByLogo from 'shared/assets/img/news-api.jpg';
import styles from './PoweredBy.module.scss';

type PoweredByProps = {
  className?: string;
};
export default function PoweredBy({ className }: PoweredByProps) {
  return (
    <p className={clsx(styles.PoweredBy, className)}>
      <span className={styles.text}>Powered by</span>
      <a className={styles.link} href="https://developer.nytimes.com/">
        <img
          src={poweredByLogo}
          loading="lazy"
          alt="News API logo"
          width={84}
          height={24}
        />
      </a>
    </p>
  );
}
