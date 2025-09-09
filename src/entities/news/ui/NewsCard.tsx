import clsx from 'clsx';
import styles from './NewsCard.module.scss';
import type { News } from '../model/types';

type NewsCardProps = News & {
  className?: string;
};

export default function NewsCard({
  className,
  webUrl,
  image,
  source,
  abstract,
  pubDate,
}: NewsCardProps) {
  return (
    <article className={clsx(styles.NewsCard, className)}>
      <h3 className={styles.title}>
        <a className={styles.link} href={webUrl}>
          {source}
        </a>
      </h3>
      <img className={styles.img} src={image} loading="lazy" alt="" />
      <p className={styles.text}>{abstract}</p>
      <time className={styles.date} dateTime="">
        {/* // TODO: dateTime YYYY-MM-DDThh:mm:ssTZD */}
        {pubDate}
      </time>
    </article>
  );
}
