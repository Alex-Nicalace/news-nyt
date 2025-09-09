import type { NewsDTO } from './dto';

export interface News {
  abstract: string;
  webUrl: string;
  image: string;
  pubDate: Date;
  source: string;
}

export interface NewsByDate {
  pubDate: Date;
  news: News[];
}

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
      image: item.multimedia?.[0]?.url || '',
      pubDate: new Date(item.pub_date),
      source: item.source,
    };

    if (day !== currentDate) {
      currentDate = day;
      currentGroup = { pubDate: new Date(day), news: [] };
      grouped.push(currentGroup);
    }

    currentGroup!.news.push(news);
  }

  return grouped;
}
