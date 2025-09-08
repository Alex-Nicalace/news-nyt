import clsx from 'clsx';
import styles from './NewsCard.module.scss';

type NewsCardProps = {
  className?: string;
  href: string;
  image: string;
  title: string;
  text: string;
  date: string; // TODO: date
};

export default function NewsCard({
  className,
  href,
  image,
  title,
  text,
  date,
}: NewsCardProps) {
  return (
    <article className={clsx(styles.NewsCard, className)}>
      <h3 className={styles.title}>
        <a className={styles.link} href={href}>
          {title}
        </a>
      </h3>
      <img className={styles.img} src={image} loading="lazy" alt="" />
      <p className={styles.text}>{text}</p>
      <time className={styles.date} dateTime="">
        {/* // TODO: dateTime YYYY-MM-DDThh:mm:ssTZD */}
        {date}
      </time>
    </article>
  );
}
