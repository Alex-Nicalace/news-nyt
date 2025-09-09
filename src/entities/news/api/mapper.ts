import { NYT_IMAGE_BASE_URL } from 'shared/api';
import type { NewsByDate, News } from '../model/types';
import type { NewsDTO } from './dto';

export function adaptNewsDTO(dto: NewsDTO): NewsByDate[] {
  if (!dto.response.docs) {
    return [];
  }

  // 1. сортировка по дате убыванию
  const sorted = [...dto.response.docs].sort(
    (a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
  );

  // 2. группировка
  const grouped: NewsByDate[] = [];
  let currentDate = '';
  let currentGroup: NewsByDate | null = null;

  for (const item of sorted) {
    const day = item.pub_date.slice(0, 10); // YYYY-MM-DD

    const news: News = {
      abstract: item.abstract,
      webUrl: item.web_url,
      image: `${NYT_IMAGE_BASE_URL}${item.multimedia?.[0]?.url || ''}`,
      pubDate: item.pub_date,
      source: item.source,
    };

    if (day !== currentDate) {
      currentDate = day;
      currentGroup = { pubDate: day, news: [] };
      grouped.push(currentGroup);
    }

    currentGroup!.news.push(news);
  }

  return grouped;
}
