import { Fragment, useEffect } from 'react';

import { fetchNewsPrevMonth, NewsCard, selectNews } from 'entities/news';
import {
  formatDateToDDMMYYYY,
  useAppDispatch,
  useAppSelector,
} from 'shared/lib';
import { Container, Spinner, Title } from 'shared/ui';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import styles from './NewsPage.module.scss';

// type NewsPageProps = { }
export default function NewsPage(/*{ }: NewsPageProps*/) {
  const { items, isLoading, error } = useAppSelector(selectNews);
  const dispatch = useAppDispatch();

  useEffect(
    function loadOnMount() {
      const promise = dispatch(fetchNewsPrevMonth());

      return () => {
        promise.abort();
      };
    },
    [dispatch]
  );

  return (
    <>
      <Header />
      <Container className={styles.container} tag="main">
        {items.length > 0 &&
          items.map(({ pubDate, news }) => (
            <Fragment key={pubDate}>
              <Title
                className={styles.title}
                as="h2"
              >{`News for ${formatDateToDDMMYYYY(pubDate)}`}</Title>
              {news.map((newsItem) => (
                <NewsCard
                  className={styles.card}
                  key={newsItem.webUrl}
                  {...newsItem}
                />
              ))}
            </Fragment>
          ))}
        {isLoading && <Spinner className={styles.spinner} />}
        {error && <p>{error}</p>}
      </Container>
      <Footer />
    </>
  );
}
