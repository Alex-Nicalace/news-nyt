import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { Container, Title } from 'shared/ui';
import { NewsCard } from 'entities/news';
import styles from './NewsPage.module.scss';

const newsByDate = [
  {
    date: '2023-02-26',
    news: [
      {
        title: 'CNN',
        href: 'https://www.cnn.com/2023/02/26/tech/tiktok-privacy/index.html',
        image: 'img.png',
        date: 'Feb 26, 2023, 16.32 PM',
        text: 'Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours',
      },
      {
        title: 'CNN',
        href: 'https://www.cnn.com/2023/02/25/tech/tiktok-privacy/index.html',
        image: 'img.png',
        date: 'Feb 26, 2023, 16.32 PM',
        text: 'Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours',
      },
    ],
  },
  {
    date: '2023-02-27',
    news: [
      {
        title: 'CNN',
        href: 'https://www.cnn.com/2023/02/24/tech/tiktok-privacy/index.html',
        image: 'img.png',
        date: 'Feb 26, 2023, 16.32 PM',
        text: 'Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours',
      },
      {
        title: 'CNN',
        href: 'https://www.cnn.com/2023/02/23/tech/tiktok-privacy/index.html',
        image: 'img.png',
        date: 'Feb 26, 2023, 16.32 PM',
        text: 'Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours',
      },
      {
        title: 'CNN',
        href: 'https://www.cnn.com/2023/02/22/tech/tiktok-privacy/index.html',
        image: 'img.png',
        date: 'Feb 26, 2023, 16.32 PM',
        text: 'Why TikTok is taking months to delete personal US user data from servers outside its Project Texas firewalls, even as its political standing sours',
      },
    ],
  },
];

// type NewsPageProps = { }
export default function NewsPage(/*{ }: NewsPageProps*/) {
  return (
    <>
      <Header />
      <Container className={styles.container} tag="main">
        {newsByDate.map(({ date, news }) => (
          <section className={styles.section} key={date}>
            <Title className={styles.title} as="h2">{`News for ${date}`}</Title>
            {news.map((newsItem) => (
              <NewsCard
                className={styles.card}
                key={newsItem.href}
                {...newsItem}
              />
            ))}
          </section>
        ))}
      </Container>
      <Footer />
    </>
  );
}
