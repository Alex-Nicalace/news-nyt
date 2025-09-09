import { createSlice } from '@reduxjs/toolkit';
import { fetchNewsPrevMonth } from './newsThunk';
import type { NewsSliceState } from './types';

const initialState: NewsSliceState = {
  items: [],
  monthsLoaded: [],
  isLoading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchNewsPrevMonth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNewsPrevMonth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(...action.payload.news);
        state.monthsLoaded.push({
          year: action.payload.year,
          month: action.payload.month,
        });
      })
      .addCase(fetchNewsPrevMonth.rejected, (state, action) => {
        if (action.error.name === 'AbortError') {
          state.error = null;
          return;
        }
        state.isLoading = false;
        state.error = action.error.message || 'Error fetching news';
      }),
  selectors: {
    selectNews: (state) => state,
  },
});

export default newsSlice.reducer;

export const { selectNews } = newsSlice.selectors;
