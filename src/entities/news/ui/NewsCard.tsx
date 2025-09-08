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
      <a className={styles.link} href={href}>
        <h3 className={styles.title}>{title}</h3>
        <img className={styles.img} src={image} loading="lazy" alt="" />
        <p className={styles.text}>{text}</p>
        <time className={styles.date} dateTime="">
          {/* // TODO: dateTime YYYY-MM-DDThh:mm:ssTZD */}
          {date}
        </time>
      </a>
    </article>
  );
}
