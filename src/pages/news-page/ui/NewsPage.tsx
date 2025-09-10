import clsx from 'clsx';
import { useCallback, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { fetchNewsPrevMonth, NewsCard, selectNews } from 'entities/news';
import {
  formatDateToDDMMYYYY,
  useAppDispatch,
  useAppSelector,
} from 'shared/lib';
import { Container, Spinner, Title } from 'shared/ui';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { useFlattenNews } from '../lib';
import styles from './NewsPage.module.scss';

export default function NewsPage() {
  const { items, isLoading, error } = useAppSelector(selectNews);
  const dispatch = useAppDispatch();
  const itemsFlat = useFlattenNews(items);

  useEffect(
    function loadOnMount() {
      const promise = dispatch(fetchNewsPrevMonth());

      return () => {
        promise.abort();
      };
    },
    [dispatch]
  );

  const loadMore = useCallback(() => {
    dispatch(fetchNewsPrevMonth());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container className={styles.container} tag="main">
        {isLoading && !items.length && <Spinner className={styles.spinner} />}
        {items.length > 0 && (
          <Virtuoso
            style={{ height: '100%' }}
            data={itemsFlat}
            endReached={loadMore}
            itemContent={(index, item) => {
              if (typeof item === 'string') {
                return (
                  <Title
                    className={clsx(styles.title, {
                      [styles.titleNotFirst]: index !== 0,
                    })}
                    as="h2"
                  >
                    {`News for ${formatDateToDDMMYYYY(item)}`}
                  </Title>
                );
              }
              return (
                <NewsCard
                  className={clsx(styles.card, {
                    [styles.cardLastDayOfMonth]:
                      typeof itemsFlat[index + 1] === 'string',
                  })}
                  {...item}
                />
              );
            }}
            components={{ Footer: FooterSpinner }}
          />
        )}
        {error && <p>{error}</p>}
      </Container>
      <Footer />
    </>
  );
}

function FooterSpinner() {
  return (
    <div className={styles.footerSpinner}>
      <Spinner />
    </div>
  );
}
