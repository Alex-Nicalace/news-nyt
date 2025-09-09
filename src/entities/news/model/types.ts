export interface NewsSliceState {
  items: NewsByDate[]; // сгруппированные по дням
  monthsLoaded: { year: number; month: number }[]; // какие месяцы уже подтянули
  isLoading: boolean;
  error: string | null;
}

export interface News {
  abstract: string;
  webUrl: string;
  image: string;
  pubDate: string;
  source: string;
}

export interface NewsByDate {
  pubDate: string;
  news: News[];
}
