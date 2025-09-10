import type { News, NewsByDate } from 'entities/news';
import { useMemo } from 'react';

export function useFlattenNews(newsByDates: NewsByDate[]) {
  return useMemo(() => {
    const flatItems: (string | News)[] = [];

    newsByDates.forEach((newsByDate) => {
      flatItems.push(newsByDate.pubDate);
      flatItems.push(...newsByDate.news);
    });

    return flatItems;
  }, [newsByDates]);
}
