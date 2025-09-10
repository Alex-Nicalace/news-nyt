import { createAsyncThunk } from '@reduxjs/toolkit';
import { getNews } from '../api';
import type { NewsSliceState } from './types';

export const fetchNewsPrevMonth = createAsyncThunk(
  'news/fetchNews',
  async (_, { getState, signal }) => {
    const state = getState() as { news: NewsSliceState };
    const { monthsLoaded } = state.news;

    const { year: currentYear, month: currentMonth } =
      monthsLoaded.length > 0
        ? monthsLoaded[monthsLoaded.length - 1]
        : { year: 2025, month: 1 };

    const prevMonth = new Date(currentYear, currentMonth - 2, 1);

    const year = prevMonth.getFullYear();
    const month = prevMonth.getMonth() + 1;

    const news = await getNews(year, month, { signal });

    return { news, year, month };
  }
);
